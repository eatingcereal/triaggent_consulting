import { NextResponse } from "next/server";
import { isSameOrigin, loginBucket, passwordMatches, readSession } from "@/lib/auth";
import { consumeLoginAttempt, createSession, revokeSession } from "@/lib/security-store";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, error: "origin" }, { status: 403 });
  }
  try {
    // Reserve synchronously in persistent storage before reading the body.
    if (!consumeLoginAttempt(loginBucket(req))) {
      return NextResponse.json({ ok: false, error: "rate" }, { status: 429, headers: { "Retry-After": "600" } });
    }
    if (!req.headers.get("content-type")?.startsWith("application/json")
        || Number(req.headers.get("content-length")) > 4096) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }
    const reader = req.body?.getReader();
    let raw = "";
    if (reader) {
      const decoder = new TextDecoder();
      let size = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 4096) {
          await reader.cancel();
          return NextResponse.json({ ok: false, error: "invalid" }, { status: 413 });
        }
        raw += decoder.decode(value, { stream: true });
      }
      raw += decoder.decode();
    }
    let body;
    try { body = JSON.parse(raw); } catch {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }
    if (typeof body?.password !== "string" || !passwordMatches(body.password)) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 });
    }
    const session = await readSession();
    revokeSession(session.sessionId);
    session.sessionId = createSession();
    await session.save();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }
}
