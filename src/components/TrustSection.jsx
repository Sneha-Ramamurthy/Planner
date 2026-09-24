import { motion } from 'framer-motion'

// TODO(backend): replace with GET /api/stats once MongoDB aggregation is wired up.
// These are fictional frontend demonstration figures.
const stats = [
  { value: '1,000+', label: 'Wedding Inspirations' },
  { value: '50+', label: 'Cities' },
  { value: '500+', label: 'Wedding Partners' },
  { value: '4.9/5', label: 'Couple Experience' },
]

export default function TrustSection() {
  return (
    <section className="border-y border-charcoal/10 bg-beige/60">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <h2 className="max-w-lg font-display text-4xl leading-tight text-charcoal sm:text-5xl">
          Planning together should feel effortless.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-5xl text-burgundy sm:text-6xl">{s.value}</p>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 + 0.2 }}
                className="mt-4 block h-px w-10 origin-left bg-charcoal/30"
              />
              <p className="mt-4 font-body text-sm text-charcoal/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
