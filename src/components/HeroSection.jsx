import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop'

export default function HeroSection() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal">
      {/* Replace the poster image below with a real <video src="/videos/hero.mp4" .../>
          once wedding footage is available. The <img> is a structural placeholder. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={FALLBACK_IMAGE}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <img
        src={FALLBACK_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 font-body text-[13px] tracking-wideish text-champagne"
        >
          Your story. Beautifully planned.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl leading-[1.05] text-warmwhite sm:text-6xl md:text-7xl"
        >
          Where Your Forever Begins
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md font-body text-[16px] leading-relaxed text-warmwhite/80"
        >
          From the first idea to the final celebration, bring every beautiful detail of your
          wedding together with WedPlan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-warmwhite/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} strokeWidth={1.3} />
        </motion.div>
      </motion.div>
    </section>
  )
}
