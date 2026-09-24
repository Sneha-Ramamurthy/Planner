import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function StartPlanningPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', mobile: '', email: '' })

  const preferences = state && (state.city || state.style || state.budget) ? state : null

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submission — a real request will POST to /api/leads once the backend exists.
    navigate('/select-city')
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 pt-24 pb-16">
      <p className="font-body text-[13px] tracking-wideish text-burgundy">Start planning</p>
      <h1 className="mt-3 font-display text-4xl text-charcoal">Let’s begin your celebration.</h1>
      <p className="mt-3 font-body text-sm text-charcoal/60">
        A few details so we can start putting your plan together.
      </p>

      {preferences && (
        <div className="mt-6 border border-charcoal/10 bg-beige/50 px-4 py-3">
          <p className="font-body text-xs text-charcoal/50">Carried over from your selections</p>
          <p className="mt-1 font-body text-sm text-charcoal/75">
            {[preferences.city, preferences.style, preferences.budget].filter(Boolean).join(' · ')}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <label className="block">
          <span className="mb-1.5 block font-body text-[13px] text-charcoal/50">Name</span>
          <input
            required
            value={form.name}
            onChange={handleChange('name')}
            className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal focus:border-burgundy"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-body text-[13px] text-charcoal/50">Mobile Number</span>
          <input
            type="tel"
            required
            value={form.mobile}
            onChange={handleChange('mobile')}
            className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal focus:border-burgundy"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-body text-[13px] text-charcoal/50">
            Email <span className="text-charcoal/35">(optional)</span>
          </span>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            className="w-full border border-charcoal/20 bg-transparent px-4 py-3 font-body text-sm text-charcoal focus:border-burgundy"
          />
        </label>

        <button
          type="submit"
          className="w-full border border-burgundy bg-burgundy px-6 py-3.5 font-body text-[15px] text-warmwhite transition-colors duration-300 hover:bg-burgundy-dark"
        >
          Continue →
        </button>
      </form>
    </div>
  )
}
