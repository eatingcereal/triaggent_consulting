import { NextResponse } from "next/server";
import { sessionOptions } from "@/lib/session";

// Expire the session cookie and send the user back to the login screen.
export async function GET(req: Request) {
  const res = NextResponse.redirect(new URL("/login", req.url));
  res.cookies.set(sessionOptions.cookieName, "", { path: "/", maxAge: 0 });
  return res;
}
