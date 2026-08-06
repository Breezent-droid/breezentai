import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Cpu, Code2, BarChart3 } from 'lucide-react'
import { Reveal } from '../Reveal'
import { WHATSAPP_NUMBER } from '../WhatsAppFloatButton'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1220] pb-24 pt-36 md:pb-32 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#F5B642]/20 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#F5B642]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F5B642]/30 bg-[#F5B642]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5B642]">
              AI &amp; ICT Training
            </span>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h1 className="mt-6 font-poppins text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Learn Today.{' '}
              <span className="bg-gradient-to-r from-[#F5B642] to-[#fdd589] bg-clip-text text-transparent">
                Apply Tomorrow.
              </span>{' '}
              Lead Forever.
            </h1>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              We empower individuals, businesses and organizations with practical
              AI and ICT skills that prepare them for today's digital economy.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F5B642] to-[#e0a530] px-8 py-4 font-poppins text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_rgba(245,182,66,0.35)] transition-transform duration-300 hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-poppins text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:border-[#16A34A] hover:text-[#16A34A]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.15}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-xl"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F5B642]" />
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                  <span className="h-3 w-3 rounded-full bg-white/30" />
                </div>
                <Cpu className="h-24 w-24 text-[#F5B642]/70" strokeWidth={1} />
                <div className="space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-white/15" />
                  <div className="h-2 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0B1220]/80 px-4 py-3 shadow-2xl backdrop-blur-xl"
            >
              <Code2 className="h-5 w-5 text-[#F5B642]" />
              <span className="text-xs font-semibold text-white">Website Creation</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-2 bottom-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0B1220]/80 px-4 py-3 shadow-2xl backdrop-blur-xl"
            >
              <BarChart3 className="h-5 w-5 text-[#16A34A]" />
              <span className="text-xs font-semibold text-white">AI Productivity</span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
