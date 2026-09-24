import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { weddings } from '../data/weddings'

const stories = weddings.slice(0, 4)

export default function WeddingStoryCarousel() {
  const trackRef = useRef(null)

  const scrollByAmount = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Every celebration has its own story.
          </h2>
          <p className="mt-3 max-w-md font-body text-charcoal/60">
            Discover inspiration from beautifully imagined wedding experiences.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            aria-label="Previous story"
            onClick={() => scrollByAmount(-1)}
            className="flex h-11 w-11 items-center justify-center border border-charcoal/20 text-charcoal transition-colors hover:border-burgundy hover:text-burgundy"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Next story"
            onClick={() => scrollByAmount(1)}
            className="flex h-11 w-11 items-center justify-center border border-charcoal/20 text-charcoal transition-colors hover:border-burgundy hover:text-burgundy"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        tabIndex={0}
      >
        {stories.map((s, i) => (
          <Link
            to={`/real-weddings/${s.id}`}
            key={s.id}
            className={`group relative shrink-0 snap-start overflow-hidden ${
              i % 3 === 0 ? 'w-[78vw] sm:w-[460px]' : 'w-[78vw] sm:w-[360px]'
            }`}
          >
            <div className={`overflow-hidden ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
              <img
                src={s.heroImage}
                alt={`${s.coupleNames} wedding in ${s.city}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <p className="font-display text-2xl text-charcoal">{s.coupleNames}</p>
                <p className="mt-1 font-body text-sm text-charcoal/55">
                  {s.city} · {s.month} {s.year} · {s.style}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 text-burgundy opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
