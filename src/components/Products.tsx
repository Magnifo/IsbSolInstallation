import { useMemo, useState } from "react"
import { Check, ShoppingCart } from "lucide-react"
import { products } from "../data/site"
import { useCart } from "../context/CartContext"

const filters = ["All", "Solar Panels", "Inverters", "Lithium Batteries"] as const

export function Products() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const { addItem, items, openCart } = useCart()

  const filtered = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.category === filter)),
    [filter],
  )

  const inCartIds = useMemo(() => new Set(items.map((item) => item.id)), [items])

  return (
    <section id="products" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">Online shop</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Shop Solar Products</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Select multiple products, add to cart, then send one WhatsApp order.
            </p>
          </div>
          {items.length > 0 && (
            <button
              type="button"
              onClick={openCart}
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue bg-white px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              <ShoppingCart className="h-4 w-4" />
              View cart ({items.reduce((n, i) => n + i.qty, 0)})
            </button>
          )}
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === item
                  ? "bg-brand-blue text-white shadow"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-brand-blue/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => {
            const selected = inCartIds.has(product.id)
            return (
              <article
                key={product.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  selected ? "border-brand-blue ring-2 ring-brand-blue/20" : "border-slate-200 hover:border-brand-blue/30"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {product.badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-gold px-2.5 py-0.5 text-[10px] font-bold uppercase text-slate-900 shadow">
                      {product.badge}
                    </span>
                  )}
                  {selected && (
                    <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-brand-blue px-2.5 py-0.5 text-[10px] font-bold uppercase text-white shadow">
                      <Check className="h-3 w-3" />
                      In cart
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-blue">{product.category}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-slate-900">{product.name}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">{product.brand}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.specs}</p>
                  <p className="mt-3 font-display text-lg font-bold text-brand-blue-dark">{product.price}</p>
                  <button
                    type="button"
                    onClick={() => addItem(product)}
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition ${
                      selected
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "bg-brand-blue text-white hover:bg-brand-blue-dark"
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {selected ? "Add another" : "Add to cart"}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
