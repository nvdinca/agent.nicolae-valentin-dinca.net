"use client";

const WHATSAPP_PHONE = "40784493923";

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form doar de formă – nu trimite nimic
  }

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
          Get in touch
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          We reply within 24 hours. For viewings or a call, tell us your
          interest below.
        </p>

        <form
          className="mt-10 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              I am interested in
            </label>
            <select
              id="interest"
              name="interest"
              className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white"
            >
              <option value="buy">Buying</option>
              <option value="sell">Selling</option>
              <option value="rent">Renting</option>
              <option value="invest">Investment</option>
              <option value="relocate">Relocation</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400"
              placeholder="Tell us about your plans or the property you're looking for."
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-lg bg-sky-500 px-6 py-3 text-base font-medium text-white hover:bg-sky-600 transition-colors"
            >
              Send message
            </button>
          </div>
        </form>

        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300 text-center mb-4">
            Want a site like this? Contact{" "}
            <a
              href="https://nicolae-valentin-dinca.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              Nicolae-Valentin Dinca
            </a>{" "}
            on WhatsApp.
          </p>
          <div className="flex justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hi, I'm interested in a website like this one.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#20bd5a] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
