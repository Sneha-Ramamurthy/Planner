import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (d) => {
    setDir(d)
    setIndex((i) => (i + d + testimonials.length) % testimonials.length)
  }

  const active = testimonials[index]
  const nextT = testimonials[(index + 1) % testimonials.length]
  const prevT = testimonials[(index - 1 + testimonials.length) % testimonials.length]

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
          Stories of love, told by couples.
        </h2>
        <div className="flex items-center gap-2 font-body text-sm text-charcoal/60">
          <span>Couple experiences</span>
          <span className="text-gold">★★★★★</span>
          <span>4.9/5</span>
        </div>
      </div>

      <div
        className="relative mt-14 flex items-center justify-center gap-4 md:gap-8"
        onTouchStart={(e) => (e.currentTarget.dataset.x = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const startX = Number(e.currentTarget.dataset.x || 0)
          const diff = e.changedTouches[0].clientX - startX
          if (diff > 50) go(-1)
          else if (diff < -50) go(1)
        }}
      >
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="hidden h-11 w-11 shrink-0 items-center justify-center border border-charcoal/20 text-charcoal transition-colors hover:border-burgundy hover:text-burgundy md:flex"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="hidden w-40 shrink-0 select-none opacity-40 blur-[1px] md:block">
          <p className="line-clamp-3 font-display text-lg italic text-charcoal/70">
            “{prevT.review}”
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: dir * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -dir * 30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl border border-charcoal/10 bg-warmwhite px-8 py-10 text-center sm:px-14"
          >
            <div className="mb-5 flex justify-center gap-1 text-gold">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="font-display text-2xl leading-snug text-charcoal sm:text-3xl">
              “{active.review}”
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <img
                src={active.image}
                alt=""
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-body text-sm font-semibold text-charcoal">
                  {active.coupleNames}
                </p>
                <p className="font-body text-xs text-charcoal/50">
                  {active.city} · {active.date}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden w-40 shrink-0 select-none opacity-40 blur-[1px] md:block">
          <p className="line-clamp-3 font-display text-lg italic text-charcoal/70">
            “{nextT.review}”
          </p>
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="hidden h-11 w-11 shrink-0 items-center justify-center border border-charcoal/20 text-charcoal transition-colors hover:border-burgundy hover:text-burgundy md:flex"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-3 md:hidden">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center border border-charcoal/20 text-charcoal"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center border border-charcoal/20 text-charcoal"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  )
}
