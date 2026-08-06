import { Reveal } from '../Reveal'

const STEPS = [
  { num: '01', title: 'Register' },
  { num: '02', title: 'Choose Course' },
  { num: '03', title: 'Attend Training' },
  { num: '04', title: 'Practice Projects' },
  { num: '05', title: 'Certification' },
  { num: '06', title: 'Career Support' },
]

export function Process() {
  return (
    <section className="bg-[#0B1220] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
            Learning Process
          </span>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold text-white sm:text-4xl">
            Your Path To Mastery
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08} direction="up">
              <div className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B642]/40 hover:bg-white/[0.06]">
                <span className="font-poppins text-3xl font-extrabold text-[#F5B642]/80">
                  {step.num}
                </span>
                <span className="mt-3 text-sm font-semibold text-white">
                  {step.title}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-[#F5B642]/30 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
