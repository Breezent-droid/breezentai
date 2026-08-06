import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '../Reveal'
import { WHATSAPP_NUMBER } from '../WhatsAppFloatButton'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5B642] via-[#e0a530] to-[#c98a1f] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[#0B1220] blur-[100px]" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl md:text-5xl">
          Ready to Upgrade Your Digital Skills?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#0B1220]/75">
          Join hundreds of students, professionals and businesses building their
          future with Breezent AI &amp; ICT Training.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0B1220] px-8 py-4 font-poppins text-sm font-semibold text-white shadow-xl transition-transform duration-300 hover:scale-105"
          >
            Enroll Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#0B1220] px-8 py-4 font-poppins text-sm font-semibold text-[#0B1220] transition-colors duration-300 hover:bg-[#0B1220] hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
