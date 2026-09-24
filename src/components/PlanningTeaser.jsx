import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { planningCities, planningStyles, planningBudgets } from '../data/planningOptions'

function OptionGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p className="mb-3 font-body text-[13px] tracking-wideish text-charcoal/50">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = value === opt
          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`border px-4 py-2 font-body text-sm transition-colors duration-200 ${
                isSelected
                  ? 'border-burgundy bg-burgundy text-warmwhite'
                  : 'border-charcoal/20 text-charcoal/75 hover:border-charcoal/40'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function PlanningTeaser() {
  const [city, setCity] = useState(null)
  const [style, setStyle] = useState(null)
  const [budget, setBudget] = useState(null)
  const navigate = useNavigate()

  const hasSelection = city || style || budget

  return (
    <section className="bg-blush/25">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Your wedding should feel uniquely yours.
            </h2>
            <p className="mt-4 max-w-md font-body text-charcoal/60">
              Start with a few ideas. Discover what your celebration could become.
            </p>

            <button
              onClick={() =>
                navigate('/start-planning', { state: { city, style, budget } })
              }
              className="mt-10 border border-burgundy bg-burgundy px-7 py-3.5 font-body text-[15px] text-warmwhite transition-colors duration-300 hover:bg-burgundy-dark"
            >
              Build My Wedding Plan →
            </button>
          </div>

          <div className="space-y-8 border border-charcoal/10 bg-warmwhite p-8 sm:p-10">
            <OptionGroup label="Wedding city" options={planningCities} value={city} onChange={setCity} />
            <OptionGroup label="Wedding style" options={planningStyles} value={style} onChange={setStyle} />
            <OptionGroup label="Budget" options={planningBudgets} value={budget} onChange={setBudget} />

            {hasSelection && (
              <div className="hairline" />
            )}
            {hasSelection && (
              <p className="font-body text-sm text-charcoal/60">
                {[city, style, budget].filter(Boolean).join(' · ') || 'Select an option above'}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
