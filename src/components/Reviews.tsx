import { Quote, Star } from 'lucide-react'
import { business, reviews } from '../data/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const stars = Array.from({ length: 5 })

export function Reviews() {
  return (
    <section id="depoimentos" className="relative scroll-mt-20 overflow-hidden bg-blush/60 py-24 sm:py-32">
      <div aria-hidden className="pattern-swirl pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Depoimentos"
              title="Quem faz,"
              highlight="volta sempre."
              description="Avaliações reais de clientes no Google. Atendimento atencioso e resultado impecável, do jeito que você merece."
              align="left"
            />
            <Reveal delay={0.25} className="mt-8">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 rounded-2xl border border-ink/8 bg-white/80 p-4 pr-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="font-display text-5xl leading-none font-semibold text-wine-600">{business.rating.value}</span>
                <span>
                  <span className="flex gap-0.5 text-gold-500" aria-label="5 de 5 estrelas">
                    {stars.map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                  <span className="mt-1 block text-xs text-ink-soft">
                    {business.rating.count} avaliações no Google ·{' '}
                    <span className="text-wine-600 underline-offset-2 group-hover:underline">ver todas</span>
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal as="li" key={r.author} delay={0.1 + i * 0.1} className={i === 1 ? 'sm:translate-y-8' : ''}>
                <figure className="relative flex h-full flex-col rounded-3xl border border-ink/6 bg-white/85 p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <Quote size={36} strokeWidth={1} className="absolute top-6 right-6 text-gold-400/70" />
                  <span className="flex gap-0.5 text-gold-500">
                    {stars.map((_, k) => (
                      <Star key={k} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                  <blockquote className="font-display mt-5 flex-1 text-2xl leading-snug text-ink">“{r.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-wine-600 text-sm font-semibold text-cream">
                      {r.author.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">{r.author}</span>
                      <span className="block text-xs text-muted">Cliente · Google</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
