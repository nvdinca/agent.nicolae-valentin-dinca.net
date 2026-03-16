const areas = [
  {
    name: "Europe",
    cities: "London, Paris, Lisbon, Barcelona, Amsterdam",
    description: "Prime cities and coastal markets for living and investment.",
  },
  {
    name: "Middle East",
    cities: "Dubai, Abu Dhabi",
    description: "Luxury and off-plan in fast-growing, tax-efficient hubs.",
  },
  {
    name: "Asia",
    cities: "Singapore, Hong Kong, Bangkok",
    description: "Gateway cities and lifestyle destinations.",
  },
];

export function Areas() {
  return (
    <section id="areas" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          Markets we cover
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Active in key global hubs. We help you buy, sell or invest in these
          regions.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.name}
              className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {area.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-sky-600 dark:text-sky-400">
                {area.cities}
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
