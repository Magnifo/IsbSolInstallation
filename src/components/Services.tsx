import { Battery, Building2, FileText, Sun, Wrench, Zap } from "lucide-react"
import { services } from "../data/site"

const icons = {
  sun: Sun,
  wrench: Wrench,
  zap: Zap,
  battery: Battery,
  file: FileText,
  building: Building2,
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">Installation & support</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Buy from our shop and get professional installation, maintenance and electrical work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons]
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-blue/10 p-3 text-brand-blue transition group-hover:bg-brand-gold/20 group-hover:text-brand-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
