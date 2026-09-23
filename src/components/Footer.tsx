import { MapPin, Phone } from 'lucide-react'
import logoLight from '../assets/brand/logo-light.webp'
import { business, navLinks, whatsappLink } from '../data/site'
import { InstagramIcon } from './ui/InstagramIcon'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

export function Footer() {
  const a = business.address
  return (
    <footer className="bg-wine-900 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-cream">
      <div className="container-x">
        <div className="gold-line" />
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoLight} alt={`${business.name} · Lash Designer`} width={1587} height={393} loading="lazy" className="h-14 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              Extensão de cílios em Jaraguá do Sul. {business.mission}
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-all hover:border-gold-400 hover:text-gold-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-all hover:border-gold-400 hover:text-gold-300"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Rodapé">
            <p className="eyebrow text-gold-400">Navegação</p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/75 transition-colors hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow text-gold-400">Studio</p>
            <address className="mt-5 space-y-3 text-sm not-italic text-cream/75">
              <a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 transition-colors hover:text-gold-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>
                  {a.street}
                  <br />
                  {a.district}, {a.city}
                  <br />
                  CEP {a.zip}
                </span>
              </a>
              <a href={`tel:+${business.phoneE164}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone size={16} className="shrink-0 text-gold-400" /> {business.phoneDisplay}
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name} · Lash Designer. Todos os direitos reservados.
          </p>
          <p>Jaraguá do Sul · Santa Catarina</p>
        </div>
      </div>
    </footer>
  )
}
