import { services } from '../data/services'

export default function VendorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-10">
      <p className="font-body text-[13px] tracking-wideish text-burgundy">Vendors</p>
      <h1 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
        The vendor marketplace is on its way.
      </h1>
      <p className="mt-4 max-w-lg font-body text-charcoal/60">
        This is a placeholder route. The full vendor marketplace — with filtering, profiles and
        booking — will be built separately from the public landing page.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {services.slice(0, 6).map((s) => (
          <div key={s.id} className="border border-charcoal/10 p-5">
            <p className="font-display text-xl text-charcoal">{s.title}</p>
            <p className="mt-2 font-body text-sm text-charcoal/55">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
