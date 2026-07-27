import { useState } from "react"
import { MessageCircle, Send } from "lucide-react"
import { business } from "../data/site"

export function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    bill: "",
    interest: "Buy solar panels",
    notes: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message = `*New Order / Quote - ${business.name}*

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Monthly Bill: ${form.bill || "Not provided"}
Interest: ${form.interest}
Notes: ${form.notes || "-"}`

    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-gold">Order / quote</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-slate-900 md:text-4xl">Buy products or get a quote</h2>
            <p className="mt-4 text-slate-600">
              Tell us what you need — panels, inverter, lithium battery, electrical items or full installation.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">Phone</p>
                <a href={`tel:${business.phoneRaw}`} className="text-lg font-semibold text-brand-blue">
                  {business.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">Address</p>
                <p className="text-slate-700">{business.address}</p>
              </div>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700">Full Name *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Phone *</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue focus:ring-2"
                  placeholder="03xx xxxxxxx"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Monthly Bill (PKR)</span>
                <input
                  value={form.bill}
                  onChange={(e) => setForm({ ...form, bill: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue focus:ring-2"
                  placeholder="e.g. 15000"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700">Address *</span>
                <input
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue focus:ring-2"
                  placeholder="Sector, Islamabad"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700">I want to</span>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue focus:ring-2"
                >
                  <option>Buy solar panels</option>
                  <option>Buy inverter</option>
                  <option>Buy lithium battery</option>
                  <option>Buy electrical items</option>
                  <option>Full solar installation</option>
                  <option>Maintenance / repair</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-sm font-medium text-slate-700">Product / notes</span>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none ring-brand-blue focus:ring-2"
                  placeholder="e.g. 10x 550W panels + 5kW hybrid inverter"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
            >
              <Send className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
