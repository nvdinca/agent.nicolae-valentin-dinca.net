"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const CONSENT_KEY = "cookie-consent";

type Consent = "all" | "essential" | null;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem(CONSENT_KEY) as Consent | null;
    if (stored !== "all" && stored !== "essential") {
      setVisible(true);
    }
  }, [mounted]);

  function saveConsent(value: "all" | "essential") {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            We use cookies to ensure the site works correctly and to understand how it is used. By continuing, you accept our use of cookies. See our{" "}
            <Link href="/privacy" className="text-sky-600 dark:text-sky-400 underline hover:no-underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookies" className="text-sky-600 dark:text-sky-400 underline hover:no-underline">
              Cookie Policy
            </Link>.
          </p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => saveConsent("essential")}
              className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Essential only
            </button>
            <button
              type="button"
              onClick={() => saveConsent("all")}
              className="px-4 py-2.5 rounded-lg bg-sky-500 text-sm font-medium text-white hover:bg-sky-600 transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
