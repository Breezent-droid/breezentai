import { Users, Briefcase, Smile, Award } from 'lucide-react'
import { Reveal } from '../Reveal'
import { Counter } from '../Counter'

const STATS = [
  { icon: Users, value: 500, suffix: '+', label: 'Students Trained' },
  { icon: Briefcase, value: 50, suffix: '+', label: 'Business Clients' },
  { icon: Smile, value: 95, suffix: '%', label: 'Satisfaction Rate' },
  { icon: Award, value: 5, suffix: '+', label: 'Years Experience' },
]

export function Stats() {
  return (
    <section className="relative -mt-12 px-5 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} direction="scale">
            <div className="group rounded-2xl border border-[#F5B642]/15 bg-white p-6 text-center shadow-[0_10px_40px_rgba(11,18,32,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5B642]/40 hover:shadow-[0_20px_50px_rgba(245,182,66,0.2)]">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-[#F5B642]" strokeWidth={1.75} />
              <div className="font-poppins text-3xl font-extrabold text-[#0B1220]">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm font-medium text-[#1F2937]/60">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
