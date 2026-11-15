import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "node:crypto";
import { isIP } from "node:net";
import { authSecrets, getSessionOptions, type SessionData } from "./session";
import { touchSession } from "./security-store";

export const readSession = async () => getIronSession<SessionData>(await cookies(), getSessionOptions());

export async function isAuthenticated(): Promise<boolean> {
  const session = await readSession();
  return touchSession(session.sessionId);
}

export function passwordMatches(candidate: string): boolean {
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(candidate), digest(authSecrets().password));
}

export function loginBucket(req: Request): string {
  // With no trusted proxy configured, all clients share a conservative bucket.
  // A header is usable ONLY when the ingress overwrites it and direct access to
  // the Node origin is blocked. Never trust arbitrary X-Forwarded-For chains.
  const header = process.env.SGO_TRUSTED_IP_HEADER;
  const ip = header ? req.headers.get(header)?.trim() : undefined;
  return ip && isIP(ip) ? `ip:${ip}` : "shared";
}

export function isSameOrigin(req: Request): boolean {
  return req.headers.get("origin") === new URL(req.url).origin;
}
