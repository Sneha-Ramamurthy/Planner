import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'

const tiles = [
  {
    id: 'ceremony',
    title: 'The Ceremony',
    image:
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'celebration',
    title: 'The Celebration',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'details',
    title: 'The Details',
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function VideoStories() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="font-display text-4xl leading-tight text-warmwhite sm:text-5xl">
          Feel the moments before the celebration.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tiles.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className="group relative aspect-[3/4] overflow-hidden text-left"
            >
              <img
                src={t.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-warmwhite/70 text-warmwhite transition-transform duration-300 group-hover:scale-110">
                  <Play size={18} fill="currentColor" strokeWidth={0} className="translate-x-0.5" />
                </span>
              </div>
              <p className="absolute bottom-5 left-5 font-display text-2xl text-warmwhite">
                {t.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close video"
                className="absolute -top-11 right-0 text-warmwhite/80 hover:text-warmwhite"
              >
                <X size={26} />
              </button>
              {/* Placeholder player — swap for a real <video controls src="..."/> later. */}
              <div className="flex aspect-video w-full items-center justify-center bg-charcoal">
                <img src={active.image} alt="" className="h-full w-full object-cover opacity-60" />
                <span className="absolute font-display text-2xl text-warmwhite">
                  {active.title} — video coming soon
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
