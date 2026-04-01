import Link from "next/link"
import { Phone, MessageCircle, MapPin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776867254_c2d23a0384271162dd1c969c04efa997-sXqrtFGhuU4MbEfglnIofqmCweyAwy.jpg" 
                alt="Kính Tài - Chuyên Kính Xe Hơi & Dịch Vụ"
                className="h-16 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-background/70 text-sm mb-4">
              15 năm kinh nghiệm trong lĩnh vực thay kính ô tô. 
              Cam kết chất lượng - Dịch vụ tận tâm.
            </p>
            <a
              href="https://www.facebook.com/share/1K54efbgaz/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#trang-chu" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="#san-pham" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="#quy-trinh" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Quy trình
                </Link>
              </li>
              <li>
                <Link href="#danh-gia" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Đánh giá
                </Link>
              </li>
              <li>
                <Link href="#lien-he" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-background mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Thay kính lái (trước)</li>
              <li>Thay kính hậu (sau)</li>
              <li>Thay kính hông (cửa)</li>
              <li>Thay kính cánh (tam giác)</li>
              <li>Dịch vụ tận nơi</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0913019397" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  0913 019 397
                </a>
              </li>
              <li>
                <a 
                  href="https://zalo.me/0913019397" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Zalo: 0913 019 397
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>374 An Dương Vương, P.4, Q.5, TP.HCM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            &copy; {new Date().getFullYear()} Kính Ô Tô Kính Tài. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
