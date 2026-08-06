import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#who-we-teach', label: 'Who We Teach' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1220]/90 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5B642] to-[#d99a1f] text-[#0B1220] shadow-[0_4px_16px_rgba(245,182,66,0.4)]">
            <Sparkles className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-poppins text-lg font-extrabold tracking-tight text-white">
            Breezent<span className="text-[#F5B642]"> AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-[#F5B642]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#F5B642] to-[#e0a530] px-6 py-2.5 font-poppins text-sm font-semibold text-[#0B1220] shadow-[0_8px_24px_rgba(245,182,66,0.35)] transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Enroll Now</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0B1220]/98 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F5B642] to-[#e0a530] px-6 py-3 font-poppins text-sm font-semibold text-[#0B1220]"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
