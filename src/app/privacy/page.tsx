import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Nicolae-Valentin Dinca - Portofolio - Global Real Estate Agent",
  description: "Privacy policy and data protection information for this website.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              1. Data controller
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              This website is a portfolio project. The data controller for the purposes of the GDPR and other applicable data protection laws is Nicolae Valentin Dinca. For any questions about this policy or your data, you can contact via the contact options provided on the main site (e.g. WhatsApp link).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              2. What data we collect
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              This site is for demonstration purposes. We do not collect personal data through forms (the contact form does not submit data to a server). We may collect:
            </p>
            <ul className="list-disc pl-6 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>Technical data:</strong> IP address, browser type, device type, when you access the site (if we use analytics and you have consented to non-essential cookies).</li>
              <li><strong>Cookie and consent data:</strong> Your cookie consent choice is stored locally in your browser (localStorage) so we do not show the banner again.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              3. Legal basis and purposes
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We process data only where we have a legal basis:
            </p>
            <ul className="list-disc pl-6 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>Legitimate interest / necessity:</strong> To provide the website and ensure security and correct functioning.</li>
              <li><strong>Consent:</strong> For non-essential cookies (e.g. analytics), if you click &quot;Accept all&quot; in the cookie banner.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              4. Retention
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Cookie consent is stored until you clear it or change your choice. If we use analytics, retention will follow the analytics provider&apos;s policy and we will not keep identifiable data longer than necessary.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              5. Your rights (GDPR)
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Where applicable law gives you rights over your data, you may:
            </p>
            <ul className="list-disc pl-6 mt-3 text-slate-700 dark:text-slate-300 space-y-1">
              <li>Request access to, correction or deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time (e.g. by clearing cookies and consent and choosing &quot;Essential only&quot; next time)</li>
              <li>Lodge a complaint with a supervisory authority in your country</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              6. Third parties and transfers
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              The site may use third-party services (e.g. hosting, analytics). If those providers process data outside the EEA, we ensure appropriate safeguards (e.g. standard contractual clauses or adequacy decisions) where required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">
              7. Changes
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We may update this privacy policy. The &quot;Last updated&quot; date at the top will be revised. We encourage you to review this page periodically.
            </p>
          </section>
        </div>

        <p className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <Link href="/cookies" className="text-sky-600 dark:text-sky-400 font-medium hover:underline">
            Cookie Policy →
          </Link>
        </p>
      </main>
    </div>
  );
}
