import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import type { Product } from "../data/site"

export type CartItem = Product & { qty: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem: (product) => {
        setItems((prev) => {
          const existing = prev.find((item) => item.id === product.id)
          if (existing) {
            return prev.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
            )
          }
          return [...prev, { ...product, qty: 1 }]
        })
        setIsOpen(true)
      },
      removeItem: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
      setQty: (id, qty) => {
        if (qty < 1) {
          setItems((prev) => prev.filter((item) => item.id !== id))
          return
        }
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)))
      },
      clearCart: () => setItems([]),
    }),
    [items, isOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
