const testimonials = [
  {
    quote:
      "Professional from start to finish. Found our family home in Lisbon within two months and handled everything remotely.",
    author: "James & Sarah M.",
    location: "London, UK",
  },
  {
    quote:
      "Best decision was to work with someone who knows both our home market and Dubai. No surprises, clear numbers.",
    author: "Alex K.",
    location: "Dubai, UAE",
  },
  {
    quote:
      "Relocation support was outstanding—schools, area guides, viewings. We felt in safe hands the whole way.",
    author: "Marie L.",
    location: "Paris → Singapore",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          What clients say
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Feedback from buyers, sellers and relocating families.
        </p>
        <ul className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <li
              key={t.author}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <p className="text-slate-700 dark:text-slate-200 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-medium text-slate-900 dark:text-white">
                {t.author}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
