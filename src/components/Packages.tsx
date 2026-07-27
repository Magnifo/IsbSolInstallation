import { Check } from "lucide-react"
import { packages } from "../data/site"

export function Packages() {
  return (
    <section id="packages" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">Bundles</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Complete Solar Packages</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Panels + inverter + battery options + installation — customized after a free site survey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
                pkg.featured
                  ? "border-brand-blue shadow-xl ring-2 ring-brand-blue/30"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-slate-900">
                  Most Popular
                </span>
              )}
              <p className="text-sm font-semibold text-brand-blue">{pkg.kw}</p>
              <h3 className="font-display mt-1 text-xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{pkg.ideal}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  pkg.featured
                    ? "bg-brand-blue text-white hover:bg-brand-blue-dark"
                    : "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                }`}
              >
                {pkg.price}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
