import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy – Nicolae-Valentin Dinca - Portofolio - Global Real Estate Agent",
  description: "Cookie policy and how we use cookies on this website.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/95">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="text-sky-600 dark:text-sky-400 text-sm font-medium hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              1. What are cookies?
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They are widely used to make sites work, remember your preferences, or analyse how the site is used.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              2. How we use cookies
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We use cookies and similar technologies only as described below. You can choose to accept all cookies or only essential ones via the cookie banner.
            </p>

            <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-6 mb-2">
              Essential cookies
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
              These are necessary for the site to function. We do not need consent for these under applicable law, but we still inform you about them.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>Consent preference:</strong> We store your cookie choice (e.g. &quot;Accept all&quot; or &quot;Essential only&quot;) in your browser&apos;s local storage so we do not show the banner again. This is not a cookie but serves a similar purpose.</li>
            </ul>

            <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-6 mb-2">
              Non-essential cookies (only if you accept)
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              If you click &quot;Accept all&quot;, we may use analytics or other non-essential tools that set cookies. Currently this site may not set any such cookies; if we add them in the future (e.g. for analytics), we will list them here and they will only be placed after your consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              3. Managing your choice
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              You can change your mind at any time by clearing your browser&apos;s local storage and cookies for this site, then refreshing the page. The cookie banner will appear again and you can choose &quot;Essential only&quot; or &quot;Accept all&quot;. You can also use your browser settings to block or delete cookies generally.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              4. More information
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              For how we process personal data, see our{" "}
              <Link href="/privacy" className="text-sky-600 dark:text-sky-400 underline hover:no-underline">
                Privacy Policy
              </Link>.
            </p>
          </section>
        </div>

        <p className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <Link href="/privacy" className="text-sky-600 dark:text-sky-400 font-medium hover:underline">
            Privacy Policy →
          </Link>
        </p>
      </main>
    </div>
  );
}
