import type { SessionOptions } from "iron-session";

export interface SessionData {
  sessionId?: string;
}

export const IDLE_MS = 4 * 60 * 60 * 1000;
export const SESSION_TTL_SECONDS = 12 * 60 * 60;
export const SESSION_COOKIE = "sgo_atlas_next";

export function authSecrets() {
  const password = process.env.SGO_PASSWORD ?? "";
  const secret = process.env.SESSION_SECRET ?? "";
  if (password.length < 16 || /^(change-me|YOUR_)/i.test(password)
      || secret.length < 32 || /^(change-me|YOUR_)/i.test(secret)) {
    throw new Error("Set a unique SGO_PASSWORD (16+ characters) and SESSION_SECRET (32+ characters).");
  }
  return { password, secret };
}

export function getSessionOptions(): SessionOptions {
  return {
    password: authSecrets().secret,
    cookieName: SESSION_COOKIE,
    ttl: SESSION_TTL_SECONDS,
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    },
  };
}
