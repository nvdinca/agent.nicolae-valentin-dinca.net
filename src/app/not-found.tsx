import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 bg-slate-50 dark:bg-slate-900">
      <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">
        404
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 text-center max-w-md">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-base font-medium text-white hover:bg-sky-600 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
