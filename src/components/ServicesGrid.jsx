import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <h2 className="font-display text-4xl leading-tight text-charcoal sm:text-5xl">
        Everything your celebration deserves.
      </h2>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {services.map((s) => (
          <Link
            to={s.href}
            key={s.id}
            className={`group relative overflow-hidden ${
              s.size === 'lg' ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
            }`}
          >
            <img
              src={s.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
              <p
                className={`font-display text-warmwhite transition-transform duration-300 group-hover:-translate-y-1 ${
                  s.size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-lg sm:text-xl'
                }`}
              >
                {s.title}
              </p>
              <ArrowUpRight
                size={s.size === 'lg' ? 22 : 16}
                className="shrink-0 text-warmwhite opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
