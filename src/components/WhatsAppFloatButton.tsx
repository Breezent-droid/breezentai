import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2347067565878'

export function WhatsAppFloatButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Breezent, I would like to know more about your training programs.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Breezent on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-[0_8px_30px_rgba(22,163,74,0.45)] transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#16A34A] opacity-60 animate-ping" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2.25} />
    </a>
  )
}

export { WHATSAPP_NUMBER }
