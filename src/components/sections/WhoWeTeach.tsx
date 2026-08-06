import { GraduationCap, Building2, Landmark } from 'lucide-react'
import { Reveal } from '../Reveal'

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: 'Students',
    desc: 'Build practical digital skills for academics and career success.',
  },
  {
    icon: Building2,
    title: 'Business Owners',
    desc: 'Scale your business using AI tools and digital marketing.',
  },
  {
    icon: Landmark,
    title: 'Civil Servants',
    desc: 'Improve productivity, efficiency and workplace relevance using technology.',
  },
]

export function WhoWeTeach() {
  return (
    <section id="who-we-teach" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
            Who We Teach
          </span>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl">
            Built For Every Digital Journey
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1} direction="scale">
              <div className="group relative h-full overflow-hidden rounded-3xl border-2 border-transparent bg-[#F5F7FA] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B642] hover:shadow-[0_25px_50px_rgba(245,182,66,0.25)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1220] transition-transform duration-300 group-hover:scale-110">
                  <a.icon className="h-7 w-7 text-[#F5B642]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-poppins text-xl font-bold text-[#0B1220]">
                  {a.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[#1F2937]/70">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
