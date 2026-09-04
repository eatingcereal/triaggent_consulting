import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { sessionOptions, type SessionData } from "@/lib/session";

export const dynamic = "force-dynamic";

// Allowlist of the datasets the dashboard may request (same set as api.php).
const ALLOWED: Record<string, string> = {
  kpis: "kpis.json",
  meta: "meta.json",
  facilities: "facilities.json",
  practitioners: "practitioners.json",
  affiliations: "affiliations.json",
  codes: "codes.json",
  alerts: "alerts.json",
  summary: "summary.json",
  mn_counties: "mn_counties.json",
  facility_cms: "facility_cms.json",
  nppes_mn: "nppes_mn.json",
  external: "external.json",
};

export async function GET(req: Request) {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  if (!session.loggedIn) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const key = new URL(req.url).searchParams.get("file") ?? "";
  const fname = ALLOWED[key];
  if (!fname) {
    return NextResponse.json({ ok: false, error: "unknown file" }, { status: 400 });
  }

  try {
    const body = await fs.readFile(path.join(process.cwd(), "data", fname), "utf8");
    return new NextResponse(body, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "missing" }, { status: 404 });
  }
}
