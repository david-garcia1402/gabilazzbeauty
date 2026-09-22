import { AlertCircle, Check } from 'lucide-react'
import { importantNotes, processSteps } from '../data/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Process() {
  return (
    <section id="procedimento" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Sobre os procedimentos"
          title="Uma experiência"
          highlight="pensada para você."
          description="Do primeiro olhar ao resultado final, cada etapa é feita com calma, técnica e atenção aos detalhes."
        />

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/6 bg-white/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-soft">
                <span className="font-display absolute -top-3 -right-1 text-[7rem] leading-none font-semibold text-wine-50 transition-colors duration-500 select-none group-hover:text-wine-100">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-wine-600 text-sm font-semibold text-cream shadow-glow">
                  {i + 1}
                </span>
                <h3 className="font-display relative mt-6 text-2xl font-semibold text-balance">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.15} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-wine-800 p-7 text-cream sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.35),transparent_65%)]"
            />
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-400 text-wine-900">
                  <AlertCircle size={22} />
                </span>
                <div>
                  <p className="eyebrow text-gold-400">Importante!</p>
                  <h3 className="font-display mt-1 text-2xl font-semibold sm:text-3xl">Antes do seu horário</h3>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-3">
                {importantNotes.map((n) => (
                  <li key={n} className="flex gap-3 rounded-2xl border border-cream/10 bg-cream/5 p-4 text-sm leading-relaxed text-cream/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold-400" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
