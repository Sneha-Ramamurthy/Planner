import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Compass, CalendarCheck } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Tell us your story',
    description:
      'Share your city, wedding date, guest count, culture, style and budget.',
    Icon: Heart,
    mock: (
      <div className="space-y-3">
        {['City', 'Wedding date', 'Guest count', 'Budget'].map((f) => (
          <div key={f} className="border border-charcoal/15 bg-warmwhite px-4 py-3">
            <p className="font-body text-[11px] text-charcoal/45">{f}</p>
            <div className="mt-1.5 h-2 w-2/3 bg-champagne" />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: 'Discover your possibilities',
    description:
      'Explore venues, vendors and wedding packages based on your preferences.',
    Icon: Compass,
    mock: (
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="aspect-square border border-charcoal/15 bg-champagne/40" />
        ))}
      </div>
    ),
  },
  {
    id: 3,
    title: 'Plan, organize and celebrate',
    description:
      'Bring your bookings, details and important wedding tasks together.',
    Icon: CalendarCheck,
    mock: (
      <div className="space-y-2.5">
        {['Venue booked', 'Photographer confirmed', 'Invitations sent'].map((task) => (
          <div key={task} className="flex items-center gap-3 border border-charcoal/15 bg-warmwhite px-4 py-3">
            <span className="h-3 w-3 rounded-full border border-burgundy bg-burgundy" />
            <span className="font-body text-sm text-charcoal/70">{task}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(1)
  const current = steps.find((s) => s.id === active)

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
        From your first idea to your big day.
      </h2>
      <p className="mt-3 max-w-md font-body text-charcoal/60">
        Three thoughtful steps to begin planning your celebration.
      </p>

      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-10 flex gap-2">
            {steps.map((s) => (
              <div key={s.id} className="h-px flex-1 bg-charcoal/15">
                <motion.div
                  className="h-px bg-burgundy"
                  initial={false}
                  animate={{ width: active >= s.id ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {steps.map((s) => {
              const isActive = s.id === active
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex w-full items-start gap-4 border-b border-charcoal/10 py-5 text-left transition-colors ${
                    isActive ? '' : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <s.Icon
                    size={20}
                    strokeWidth={1.4}
                    className={isActive ? 'mt-0.5 text-burgundy' : 'mt-0.5 text-charcoal/50'}
                  />
                  <div>
                    <p
                      className={`font-display text-2xl ${
                        isActive ? 'text-charcoal' : 'text-charcoal/70'
                      }`}
                    >
                      {s.title}
                    </p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 max-w-sm overflow-hidden font-body text-sm text-charcoal/60"
                        >
                          {s.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center bg-beige/50 p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm"
            >
              {current.mock}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
