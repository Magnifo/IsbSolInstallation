import { useState } from "react"
import { Menu, Phone, ShoppingBag, ShoppingCart, X } from "lucide-react"
import { business, categories, navLinks } from "../data/site"
import { useCart } from "../context/CartContext"
import { asset } from "../lib/asset"

export function Header() {
  const [open, setOpen] = useState(false)
  const { count, openCart } = useCart()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2.5">
        <a href="#home" className="flex shrink-0 items-center">
          <img src={asset("logo.png")} alt={business.name} className="h-14 w-auto max-w-[160px] rounded-md object-contain" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden items-center gap-2 text-sm font-semibold text-brand-blue-dark md:inline-flex"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            {business.phone}
          </a>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-blue hover:text-brand-blue"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-[10px] font-bold text-slate-900">
                {count}
              </span>
            )}
          </button>
          <a
            href="#products"
            className="hidden items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-blue-dark sm:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop Now
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="hidden border-t border-slate-100 bg-slate-50 lg:block">
        <div className="mx-auto flex max-w-[1400px] gap-6 overflow-x-auto px-4 py-2">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:text-brand-blue"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.href}
                className="text-sm text-slate-600"
                onClick={() => setOpen(false)}
              >
                {cat.name}
              </a>
            ))}
            <button
              type="button"
              className="text-left text-sm font-semibold text-brand-blue"
              onClick={() => {
                setOpen(false)
                openCart()
              }}
            >
              Cart ({count})
            </button>
            <a href={`tel:${business.phoneRaw}`} className="text-sm font-semibold text-brand-blue">
              Call {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
