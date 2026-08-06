import {
  Hammer,
  FolderKanban,
  Users2,
  Wallet,
  CalendarClock,
  LifeBuoy,
} from 'lucide-react'
import { Reveal } from '../Reveal'

const FEATURES = [
  { icon: Hammer, title: 'Practical Hands-on Learning' },
  { icon: FolderKanban, title: 'Real Projects' },
  { icon: Users2, title: 'Expert Trainers' },
  { icon: Wallet, title: 'Affordable Fees' },
  { icon: CalendarClock, title: 'Flexible Schedule' },
  { icon: LifeBuoy, title: 'Lifetime Support' },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
            Why Choose Breezent
          </span>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl">
            Training That Actually Delivers
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07} direction="scale">
              <div className="group flex items-center gap-4 rounded-2xl border border-[#0B1220]/5 bg-[#F5F7FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1220]">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1220] transition-colors duration-300">
                  <f.icon className="h-6 w-6 text-[#F5B642]" strokeWidth={1.75} />
                </span>
                <span className="font-poppins text-base font-semibold text-[#0B1220] transition-colors duration-300 group-hover:text-white">
                  {f.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
