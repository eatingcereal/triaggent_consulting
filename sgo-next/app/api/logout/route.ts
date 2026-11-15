import { NextResponse } from "next/server";
import { isSameOrigin, readSession } from "@/lib/auth";
import { revokeSession } from "@/lib/security-store";

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, error: "origin" }, { status: 403 });
  }
  try {
    const session = await readSession();
    revokeSession(session.sessionId);
    session.destroy();
    return NextResponse.redirect(new URL("/login", req.url), 303);
  } catch {
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }
}
