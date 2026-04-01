"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#trang-chu", label: "Trang chủ" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#danh-gia", label: "Đánh giá" },
  { href: "#lien-he", label: "Liên hệ" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776867254_c2d23a0384271162dd1c969c04efa997-sXqrtFGhuU4MbEfglnIofqmCweyAwy.jpg" 
              alt="Kính Tài - Chuyên Kính Xe Hơi & Dịch Vụ"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white"
            >
              <a href="https://www.facebook.com/share/1K54efbgaz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://zalo.me/0913019397" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Zalo
              </a>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <a href="tel:0913019397">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">0913 019 397</span>
                <span className="sm:hidden">Gọi ngay</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.facebook.com/share/1K54efbgaz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden px-4 py-3 text-[#1877F2] hover:bg-muted rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a
                href="https://zalo.me/0913019397"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden px-4 py-3 text-primary hover:bg-muted rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Zalo
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
