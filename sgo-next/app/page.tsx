import Dashboard from "./dashboard";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Page() {
  if (!(await isAuthenticated())) redirect("/login");
  return <Dashboard />;
}
