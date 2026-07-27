import { MapPin, Phone } from "lucide-react"
import { business, categories } from "../data/site"
import { asset } from "../lib/asset"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <img src={asset("logo.png")} alt={business.name} className="mb-4 h-20 w-auto rounded-lg object-contain" />
          <p className="text-sm text-slate-600">{business.tagline}</p>
        </div>

        <div>
          <h3 className="mb-3 font-display font-semibold text-slate-900">Shop</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a href={cat.href} className="hover:text-brand-blue">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-display font-semibold text-slate-900">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              {business.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
              <a href={`tel:${business.phoneRaw}`} className="font-semibold text-brand-blue hover:underline">
                {business.phone}
              </a>
            </li>
            <li>Owner: {business.owner}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}
