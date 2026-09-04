import type { SessionOptions } from "iron-session";

// Kept free of `next/headers` imports so it is safe to import from middleware
// (Edge runtime) as well as from Node route handlers.
export interface SessionData {
  loggedIn?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "sgo_atlas",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  },
};
