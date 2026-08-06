import { Star, Quote } from 'lucide-react'
import { Reveal } from '../Reveal'

const TESTIMONIALS = [
  {
    name: 'Chidinma Okafor',
    role: 'Graduate Student',
    quote: 'Breezent completely changed my digital skills. I went from struggling with basic tools to building my own website in weeks.',
  },
  {
    name: 'Tunde Balogun',
    role: 'Small Business Owner',
    quote: 'The AI training transformed my business. I now use ChatGPT and automation daily to serve customers faster.',
  },
  {
    name: 'Amara Nwosu',
    role: 'Civil Servant',
    quote: 'The website design class was exceptional. Practical, well-paced, and the trainers were always available for support.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#F5F7FA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
            Testimonials
          </span>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl">
            Loved By Our Learners
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} direction="up">
              <div className="relative h-full rounded-3xl border border-[#F5B642]/15 bg-white p-8 shadow-[0_10px_40px_rgba(11,18,32,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(245,182,66,0.2)]">
                <Quote className="h-8 w-8 text-[#F5B642]/30" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[#F5B642] text-[#F5B642]" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-[#1F2937]/80">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-[#0B1220]/5 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0B1220] to-[#1a2740] font-poppins text-sm font-bold text-[#F5B642]">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0B1220]">{t.name}</p>
                    <p className="text-xs text-[#1F2937]/60">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
