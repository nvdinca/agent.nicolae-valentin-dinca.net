import Link from "next/link";

export function PortfolioBanner() {
  return (
    <div
      className="bg-amber-500/90 dark:bg-amber-600/90 text-slate-900 py-2 px-4 text-center text-sm"
      role="banner"
    >
      <p className="font-medium">
        This is a fictional agent & portfolio project. No real transactions or
        personal data are involved. —{" "}
        <Link
          href="https://nicolae-valentin-dinca.net"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline decoration-slate-700 underline-offset-2 hover:decoration-slate-900"
        >
          Portfolio of Nicolae-Valentin Dinca
        </Link>
      </p>
    </div>
  );
}
