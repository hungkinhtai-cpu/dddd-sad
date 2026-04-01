"use client"

import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0913019397"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0068FF] hover:bg-[#0068FF]/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Chat Zalo"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:0913019397"
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
        aria-label="Gọi điện"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  )
}
