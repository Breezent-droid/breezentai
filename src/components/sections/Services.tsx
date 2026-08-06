import {
  Globe,
  Palette,
  BrainCircuit,
  MessageSquare,
  Share2,
} from 'lucide-react'
import { Reveal } from '../Reveal'

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Creation',
    items: ['Professional responsive websites', 'Portfolio websites', 'CV design'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    items: ['Logos', 'Brand identity', 'Flyers', 'Social media designs'],
  },
  {
    icon: BrainCircuit,
    title: 'AI Training',
    items: ['ChatGPT', 'Prompt engineering', 'AI productivity', 'AI automation'],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Business Setup',
    items: ['Business profile', 'Catalog', 'Auto replies', 'Marketing'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    items: ['Facebook, Instagram, LinkedIn, TikTok', 'Content creation', 'Scheduling & analytics'],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#F5F7FA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
            Our Services
          </span>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl">
            Everything You Need To Go Digital
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} direction="up">
              <div className="group h-full rounded-3xl bg-white p-8 shadow-[0_10px_40px_rgba(11,18,32,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(11,18,32,0.12)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5B642] to-[#e0a530] shadow-[0_8px_20px_rgba(245,182,66,0.35)] transition-transform duration-300 group-hover:rotate-6">
                  <s.icon className="h-7 w-7 text-[#0B1220]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-poppins text-lg font-bold text-[#0B1220]">
                  {s.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#1F2937]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F5B642]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.4} direction="up">
            <div className="flex h-full flex-col justify-center rounded-3xl bg-[#0B1220] p-8 text-white">
              <h3 className="font-poppins text-lg font-bold text-[#F5B642]">
                Plus More
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Digital Marketing</li>
                <li>CV Design</li>
                <li>Computer Training &amp; Microsoft Office</li>
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5B642] hover:underline"
              >
                Ask us anything &rarr;
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
