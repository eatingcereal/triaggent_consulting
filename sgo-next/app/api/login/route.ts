import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sessionOptions, type SessionData } from "@/lib/session";

// Best-effort per-instance rate limit (mirrors the PHP gate: 8 tries / 10 min).
const attempts = new Map<string, number[]>();
const WINDOW_MS = 600_000;
const MAX_TRIES = 8;

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "0.0.0.0").split(",")[0].trim();
  const now = Date.now();
  const hits = (attempts.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (hits.length >= MAX_TRIES) {
    return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });
  }

  let password = "";
  try {
    const body = await req.json();
    password = String(body?.password ?? "");
  } catch {
    /* empty / non-JSON body */
  }

  const expected = process.env.SGO_PASSWORD ?? "";
  if (!expected || password !== expected) {
    hits.push(now);
    attempts.set(ip, hits);
    await new Promise((r) => setTimeout(r, 250)); // slow down guessing
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 });
  }

  attempts.delete(ip);
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  session.loggedIn = true;
  await session.save();
  return NextResponse.json({ ok: true });
}
