import { Sparkles, Facebook, Instagram, Linkedin } from 'lucide-react'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
  { href: '#about', label: 'About' },
  { href: '#why-us', label: 'Why Choose Us' },
]

export function Footer() {
  return (
    <footer className="bg-[#0B1220] pt-16">
      <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5B642] to-[#d99a1f] text-[#0B1220]">
                <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-poppins text-lg font-extrabold text-white">
                Breezent<span className="text-[#F5B642]"> AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Practical AI and ICT training for students, businesses and
              organizations ready to lead in the digital economy.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F5B642]">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F5B642]">
              Follow Us
            </p>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#F5B642] hover:text-[#F5B642]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-white/40">
          © 2026 Breezent AI &amp; ICT Training. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
