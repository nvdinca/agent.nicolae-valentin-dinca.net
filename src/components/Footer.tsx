import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          This is a <strong>fictional agent & portfolio project</strong>. No
          real transactions or personal data are involved.
        </p>
        <p className="mt-4 text-sm">
          <Link href="/privacy" className="text-sky-400 hover:text-sky-300 underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link href="/cookies" className="text-sky-400 hover:text-sky-300 underline">
            Cookie Policy
          </Link>
        </p>
        <p className="mt-4 text-sm">
          &copy; {year} Nicolae Valentin Dinca. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
