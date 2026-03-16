import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
        alt="Luxury property"
        fill
        className="object-cover opacity-50"
        priority
        sizes="100vw"
      />
      {/* Overlay fix pentru contrast text – nu depinde de opacity pe imagine */}
      <div className="absolute inset-0 bg-slate-900/50 z-[1]" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-serif">
          Your trusted partner in global real estate
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
          Luxury & investment properties worldwide. We reply within 24 hours.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <Link
            href="#properties"
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3.5 min-h-[48px] text-base font-medium text-white shadow-lg hover:bg-sky-600 active:bg-sky-700 transition-colors touch-manipulation"
          >
            View properties
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3.5 min-h-[48px] text-base font-medium text-white hover:bg-white/10 active:bg-white/20 transition-colors touch-manipulation"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
