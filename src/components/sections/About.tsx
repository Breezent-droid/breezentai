import { motion } from 'framer-motion'
import { GraduationCap, Rocket, ShieldCheck } from 'lucide-react'
import { Reveal } from '../Reveal'

const POINTS = [
  { icon: GraduationCap, text: 'Hands-on learning with real-world projects' },
  { icon: Rocket, text: 'AI-powered productivity for modern careers' },
  { icon: ShieldCheck, text: 'Certification trusted by employers' },
]

export function About() {
  return (
    <section id="about" className="bg-[#F5F7FA] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#0B1220] to-[#1a2740] shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-3xl bg-[#F5B642]/90 shadow-xl" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-56 w-56 items-center justify-center rounded-full border border-[#F5B642]/30 bg-white/5 backdrop-blur-md">
                <GraduationCap className="h-24 w-24 text-[#F5B642]" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
              About Breezent
            </span>
            <h2 className="mt-3 font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl">
              Who We Are
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-[#1F2937]/75">
              Breezent AI &amp; ICT Training is committed to equipping students,
              entrepreneurs, professionals and organizations with practical
              digital skills.
            </p>
            <p className="mt-4 leading-relaxed text-[#1F2937]/75">
              We focus on hands-on learning, real-world projects and AI-powered
              productivity to prepare learners for modern careers and businesses.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <div key={point.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1220]">
                    <point.icon className="h-5 w-5 text-[#F5B642]" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-[#1F2937]">{point.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
