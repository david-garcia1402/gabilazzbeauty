import { ArrowUpRight, Globe, MapPin, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { business, navLinks, whatsappLink } from '../data/site'
import { BrandLogo } from './ui/BrandLogo'
import { InstagramIcon } from './ui/InstagramIcon'
import { WhatsAppIcon } from './ui/WhatsAppIcon'

function StudioCredit({
  href,
  label,
  icon,
  children,
}: {
  href: string
  label: string
  icon: ReactNode
  children: ReactNode
}) {
  const reduce = useReducedMotion()

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={reduce ? undefined : { y: -3 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full border border-cream/15 bg-white/[0.04] pr-3 pl-1 text-[0.8rem] text-cream/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition-[border-color,box-shadow,background-color] duration-300 ease-[var(--ease-luxe)] hover:border-gold-400/80 hover:bg-white/[0.08] hover:shadow-[0_16px_40px_-16px_rgba(201,162,74,0.75)] focus-visible:border-gold-400 focus-visible:bg-white/[0.08]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_34%,rgba(255,255,255,0.22)_50%,transparent_66%)] bg-[length:220%_100%] animate-shimmer opacity-80"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-[260%] group-focus-visible:translate-x-[260%]"
      />
      {icon}
      <span className="relative font-medium tracking-wide text-gold-300 transition-colors duration-300 group-hover:text-cream group-focus-visible:text-cream">
        {children}
      </span>
      <ArrowUpRight
        size={14}
        aria-hidden
        className="relative text-gold-400/80 transition-transform duration-300 ease-[var(--ease-luxe)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:text-gold-300"
      />
    </motion.a>
  )
}

function InstagramMark() {
  return (
    <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full text-cream">
      <span
        aria-hidden
        className="absolute inset-0 bg-[conic-gradient(from_210deg,#f9ce34,#ee2a7b_45%,#6228d7_75%,#f9ce34)] transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:rotate-180 group-focus-visible:rotate-180"
      />
      <span
        aria-hidden
        className="absolute inset-[1.5px] rounded-full bg-wine-900 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
      />
      <InstagramIcon size={15} className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110" />
    </span>
  )
}

function SiteMark() {
  return (
    <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full text-gold-300 transition-colors duration-300 group-hover:text-wine-900 group-focus-visible:text-wine-900">
      <span
        aria-hidden
        className="absolute inset-0 bg-[conic-gradient(from_210deg,#f9ce34,#c9a24a_45%,#eed9a3_75%,#f9ce34)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span
        aria-hidden
        className="absolute inset-[1.5px] rounded-full border border-gold-400/45 bg-wine-900 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0"
      />
      <Globe
        size={15}
        aria-hidden
        className="relative z-10 transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-110 group-hover:rotate-12 group-focus-visible:scale-110 group-focus-visible:rotate-12"
      />
    </span>
  )
}

export function Footer() {
  const a = business.address
  return (
    <footer className="bg-wine-900 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-cream">
      <div className="container-x">
        <div className="gold-line" />
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo tone="cream" loading="lazy" className="h-12 w-auto sm:h-14 md:h-16" />
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

        <div className="flex flex-col items-center gap-5 border-t border-cream/10 py-6">
          <div className="flex w-full flex-col items-center justify-between gap-3 text-xs text-cream/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {business.name} · Lash Designer. Todos os direitos reservados.
            </p>
            <p>Jaraguá do Sul · Santa Catarina</p>
          </div>

          <div className="flex flex-col items-center gap-2.5">
            <p className="text-[0.68rem] tracking-[0.28em] text-cream/40 uppercase">Desenvolvido por</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <StudioCredit href="https://www.instagram.com/cub4studio/" label="Instagram @cub4studio" icon={<InstagramMark />}>
                @cub4studio
              </StudioCredit>
              <StudioCredit href="https://cub4studio.com" label="Site cub4studio.com" icon={<SiteMark />}>
                cub4studio.com
              </StudioCredit>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
