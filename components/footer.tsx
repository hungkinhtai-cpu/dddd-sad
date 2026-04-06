import Link from "next/link"
import { Phone, MessageCircle, MapPin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="inline-block p-2 bg-white rounded-xl shadow-lg shadow-primary/10">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776867254_c2d23a0384271162dd1c969c04efa997-sXqrtFGhuU4MbEfglnIofqmCweyAwy.jpg" 
                alt="Kính Tài - Chuyên Kính Xe Hơi & Dịch Vụ"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Hơn 15 năm kinh nghiệm dẫn đầu lĩnh vực thay kính ô tô tại TP.HCM. Cam kết linh kiện chính hãng, bảo hành trọn đời.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1K54efbgaz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://zalo.me/0913019397"
                target="_blank"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {['Trang chủ', 'Sản phẩm', 'Quy trình', 'Đánh giá', 'Liên hệ'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-background/60 hover:text-primary hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Dịch vụ chính</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="hover:text-background transition-colors cursor-default">Thay kính lái chính hãng</li>
              <li className="hover:text-background transition-colors cursor-default">Thay kính hậu, kính cửa</li>
              <li className="hover:text-background transition-colors cursor-default">Dịch vụ lắp đặt tận nơi</li>
              <li className="hover:text-background transition-colors cursor-default">Phủ nano chống bám nước</li>
              <li className="hover:text-background transition-colors cursor-default">Tư vấn bảo hiểm kính</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <a href="tel:0913019397" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">0913 019 397</span>
              </a>
              
              <div className="flex items-start gap-3 p-3">
                <div className="p-2 rounded-lg bg-white/10 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm text-background/60 leading-snug">
                  <p className="font-bold text-white mb-1">Cơ sở chính:</p>
                  Quận 5, Bình Tân & lân cận TP.HCM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} KÍNH Ô TÔ KÍNH TÀI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-background/40 uppercase font-medium">
            <span className="hover:text-primary cursor-pointer">Chính sách bảo hành</span>
            <span className="hover:text-primary cursor-pointer">Bảo mật thông tin</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
