import { ArrowRight, MessageCircle, Package, ShieldCheck } from "lucide-react"
import { business } from "../data/site"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white pt-36 text-slate-900 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute left-0 top-40 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
            Solar shop · Islamabad
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Shop solar panels, inverters &{" "}
            <span className="text-brand-blue">lithium batteries</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-slate-600 md:text-lg">{business.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition hover:bg-brand-blue-dark"
            >
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-gold hover:text-brand-blue-dark"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              WhatsApp Order
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-gold" />
              Genuine products
            </span>
            <span className="inline-flex items-center gap-2">
              <Package className="h-5 w-5 text-brand-blue" />
              Install + supply
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/80">
            <img
              src="/logo.png"
              alt={business.name}
              className="mx-auto w-full max-w-sm rounded-2xl object-contain md:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
