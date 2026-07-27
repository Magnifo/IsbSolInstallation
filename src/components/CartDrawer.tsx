import { MessageCircle, Minus, Plus, Trash2, X } from "lucide-react"
import { business } from "../data/site"
import { useCart } from "../context/CartContext"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQty, clearCart, count } = useCart()

  function checkoutWhatsApp() {
    if (items.length === 0) return

    const lines = items.map(
      (item, index) => `${index + 1}. ${item.name} (${item.brand}) x${item.qty}`,
    )
    const message = `*New Cart Order - ${business.name}*

Selected products:
${lines.join("\n")}

Please share prices and availability.`

    window.open(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40"
        aria-label="Close cart"
        onClick={closeCart}
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Your Cart</h2>
            <p className="text-xs text-slate-500">{count} item{count === 1 ? "" : "s"} selected</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
              <p className="font-medium text-slate-700">Cart is empty</p>
              <p className="mt-1 text-sm text-slate-500">Add panels, inverters or batteries.</p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-4 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl border border-slate-200 p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl border border-slate-100 object-contain bg-white p-1"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.brand}</p>
                    <p className="mt-1 text-xs font-semibold text-brand-blue">{item.price}</p>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-slate-200">
                        <button
                          type="button"
                          className="p-1.5 text-slate-600 hover:text-brand-blue"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.qty}</span>
                        <button
                          type="button"
                          className="p-1.5 text-slate-600 hover:text-brand-blue"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="rounded-lg p-1.5 text-red-500 hover:bg-red-50"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="space-y-2 border-t border-slate-200 p-5">
            <button
              type="button"
              onClick={checkoutWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4" />
              Send cart on WhatsApp
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
