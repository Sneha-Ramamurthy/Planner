import { planningBudgets } from '../data/planningOptions'

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-10">
      <p className="font-body text-[13px] tracking-wideish text-burgundy">Packages</p>
      <h1 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
        Wedding packages are being curated.
      </h1>
      <p className="mt-4 max-w-lg font-body text-charcoal/60">
        This is a placeholder route for bundled wedding packages across budgets. Full pricing
        and package detail pages will be built once the backend is connected.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-4">
        {planningBudgets.map((b) => (
          <div key={b} className="border border-charcoal/10 p-5 text-center">
            <p className="font-display text-2xl text-charcoal">{b}</p>
            <p className="mt-2 font-body text-xs text-charcoal/50">Package tier</p>
          </div>
        ))}
      </div>
    </div>
  )
}
