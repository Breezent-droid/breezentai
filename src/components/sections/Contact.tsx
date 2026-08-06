import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Reveal } from '../Reveal'
import { WHATSAPP_NUMBER } from '../WhatsAppFloatButton'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const CONTACT_ITEMS = [
  { icon: Phone, label: 'Phone', value: '0706 756 5878', href: 'tel:07067565878' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '0706 756 5878',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  { icon: MapPin, label: 'Location', value: 'Abuja, Nigeria', href: undefined },
  { icon: Mail, label: 'Email', value: 'hello@breezent.com', href: 'mailto:hello@breezent.com' },
]

const SOCIALS = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Contact() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setStatus('submitted')
  }

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F5B642]">
            Get In Touch
          </span>
          <h2 className="mt-3 font-poppins text-3xl font-extrabold text-[#0B1220] sm:text-4xl">
            Let's Start Your Journey
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-[#0B1220] p-8 text-white">
              <div className="space-y-6">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#F5B642]/15">
                      <item.icon className="h-5 w-5 text-[#F5B642]" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium text-white hover:text-[#F5B642]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <p className="text-xs uppercase tracking-wide text-white/50">Follow Us</p>
                <div className="mt-3 flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#F5B642] hover:text-[#F5B642]"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>

                <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
                  <iframe
                    title="Breezent location map"
                    className="h-full w-full"
                    loading="lazy"
                    src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            {status === 'submitted' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-[#F5F7FA] p-12 text-center">
                <h3 className="font-poppins text-2xl font-bold text-[#0B1220]">
                  Thank you!
                </h3>
                <p className="mt-3 text-[#1F2937]/70">
                  We've received your message and will reach out shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-[#F5F7FA] p-8 shadow-[0_10px_40px_rgba(11,18,32,0.06)]"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="text-sm font-medium text-[#1F2937]">Full Name</label>
                    <input
                      required
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-[#0B1220]/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#F5B642]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1F2937]">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-[#0B1220]/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#F5B642]"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1F2937]">Phone</label>
                    <input
                      required
                      name="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-[#0B1220]/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#F5B642]"
                      placeholder="080..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#1F2937]">Course Interested In</label>
                    <input
                      name="course"
                      value={fields.course}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-[#0B1220]/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#F5B642]"
                      placeholder="e.g. AI Training"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-[#1F2937]">Message</label>
                    <textarea
                      required
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-[#0B1220]/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#F5B642]"
                      placeholder="Tell us what you'd like to learn..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#F5B642] to-[#e0a530] px-8 py-4 font-poppins text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_rgba(245,182,66,0.35)] transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
