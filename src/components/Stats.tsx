import { stats } from "../data/site"

export function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-brand-blue md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
