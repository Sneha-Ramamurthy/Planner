import { Link } from 'react-router-dom'

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-charcoal">
      <img
        src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2000&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl leading-tight text-warmwhite sm:text-5xl">
          Ready to begin your forever?
        </h2>
        <p className="mt-4 font-body text-warmwhite/80">
          Let your ideas become a celebration worth remembering.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            to="/start-planning"
            className="border border-burgundy bg-burgundy px-7 py-3.5 font-body text-[15px] text-warmwhite transition-colors duration-300 hover:bg-burgundy-dark"
          >
            Start My Wedding Planning →
          </Link>
          <Link
            to="/real-weddings"
            className="border border-warmwhite/50 px-7 py-3.5 font-body text-[15px] text-warmwhite transition-colors duration-300 hover:border-warmwhite hover:bg-warmwhite/10"
          >
            Explore Real Weddings
          </Link>
        </div>
      </div>
    </section>
  )
}
