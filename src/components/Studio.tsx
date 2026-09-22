import { Banknote, CreditCard, MapPin, Navigation, Phone, QrCode } from 'lucide-react'
import { motion } from 'motion/react'
import studio from '../assets/studio.webp'
import { business, paymentMethods } from '../data/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const paymentIcons = [Banknote, QrCode, CreditCard, CreditCard]

export function Studio() {
  const a = business.address
  return (
    <section id="studio" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="O Studio"
          title="Um espaço acolhedor"
          highlight="feito para você relaxar."
          description="Studio de cílios no bairro Rau, em Jaraguá do Sul. Ambiente reservado, confortável e preparado com todo o cuidado para o seu momento."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="group relative h-full min-h-[22rem] overflow-hidden rounded-[2rem] shadow-glow">
              <img
                src={studio}
                alt="Interior do studio: parede vinho, prateleira de esmaltes, maca e ring light"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-luxe)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(47,9,16,0.85))]" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <p className="eyebrow text-gold-400">Endereço</p>
                <p className="font-display mt-2 text-2xl leading-tight font-semibold">{a.street}</p>
                <p className="mt-1 text-sm text-cream/80">
                  {a.district} · {a.city} · CEP {a.zip}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-ink/6 bg-white shadow-soft">
                <iframe
                  title="Mapa do studio no Google Maps"
                  src={business.googleMapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-64 w-full grayscale-[35%] contrast-[1.05] transition duration-700 hover:grayscale-0 sm:h-72"
                />
                <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-wine-50 text-wine-600">
                      <MapPin size={16} />
                    </span>
                    Sala 04 · Rau, Jaraguá do Sul - SC
                  </div>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-wine-600 px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-cream uppercase transition-all hover:bg-wine-700"
                  >
                    <Navigation size={14} /> Como chegar
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="h-full rounded-[2rem] border border-ink/6 bg-white/70 p-6">
                  <p className="eyebrow text-wine-600">Formas de pagamento</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {paymentMethods.map((p, i) => {
                      const Icon = paymentIcons[i]
                      return (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.06 }}
                          className="flex items-center gap-2 rounded-xl bg-cream px-3 py-2.5 text-sm text-ink-soft"
                        >
                          <Icon size={15} className="text-gold-600" /> {p}
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex h-full flex-col justify-between rounded-[2rem] bg-wine-800 p-6 text-cream">
                  <div>
                    <p className="eyebrow text-gold-400">Contato</p>
                    <a
                      href={`tel:+${business.phoneE164}`}
                      className="font-display mt-3 flex items-center gap-2 text-2xl font-semibold transition-colors hover:text-gold-300"
                    >
                      <Phone size={18} className="text-gold-400" /> {business.phoneDisplay}
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">
                    Atendimento com hora marcada. Agende pelo WhatsApp e tire suas dúvidas — estou à disposição!
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
