import Dashboard from "./dashboard";

// Access is enforced by middleware.ts (redirects to /login when not signed in).
export default function Page() {
  return <Dashboard />;
}
