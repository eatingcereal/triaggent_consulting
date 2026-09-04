"use client";

import { useState } from "react";

export default function LoginPage() {
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const password = new FormData(e.currentTarget).get("password");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.href = "/";
      return;
    }
    setErr(
      res.status === 429
        ? "Too many attempts from this network. Wait a few minutes and try again."
        : "That password did not match. Access was not granted."
    );
    setBusy(false);
  }

  return (
    <div className="login-wrap">
      <form className="login-card" onSubmit={onSubmit} autoComplete="off">
        <div className="mark" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16 5 L27 26 L5 26 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" opacity=".55" />
            <circle cx="16" cy="16" r="3.2" fill="white" />
          </svg>
        </div>
        <h1>SGO Economic Value Prototype</h1>
        <p>Confidential MarketView atlas for the BData / SGO working group. Enter the shared password to continue.</p>
        {err && <div className="err">{err}</div>}
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required autoFocus autoComplete="current-password" />
        <button type="submit" disabled={busy}>
          {busy ? "Checking…" : "Open dashboard"}
        </button>
        <p className="fine">Unsuccessful sign-in does not load data, schema, or files. Session expires after four idle hours.</p>
      </form>
    </div>
  );
}
