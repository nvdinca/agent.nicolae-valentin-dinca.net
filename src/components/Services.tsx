const services = [
  {
    title: "Buying",
    description:
      "From search to keys: we find the right property, negotiate and guide you through due diligence and closing.",
  },
  {
    title: "Selling",
    description:
      "Valuation, marketing and sales strategy. We target the right buyers and manage the process end to end.",
  },
  {
    title: "Renting",
    description:
      "Short and long-term rentals. We match tenants, handle contracts and optional property management.",
  },
  {
    title: "Investment",
    description:
      "Portfolio advice, yield analysis and off-plan or resale opportunities in stable and growth markets.",
  },
  {
    title: "Relocation",
    description:
      "Full support for moves abroad: area guides, schools, visas and settling-in so you can focus on your new life.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          Services
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          How we work: transparent, professional and focused on your outcome.
        </p>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <li
              key={s.title}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {s.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
