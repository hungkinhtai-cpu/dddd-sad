import { Phone, MessageCircle, MapPin, Clock, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="lien-he" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Liên Hệ <span className="text-primary">Kính Tài</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Liên hệ ngay để được tư vấn miễn phí và báo giá nhanh chóng. 
              Chúng tôi phục vụ tận nơi tại TP.HCM và các tỉnh lân cận.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Hotline</p>
                  <a href="tel:0913019397" className="text-primary text-xl font-bold hover:underline">
                    0913 019 397
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Zalo</p>
                  <a 
                    href="https://zalo.me/0913019397" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Nhắn tin Zalo ngay
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Địa chỉ cửa hàng</p>
                  <p className="text-muted-foreground">
                    <strong>374 An Dương Vương, Phường 4, Quận 5, TP.HCM</strong><br />
                    Dịch vụ tận nơi toàn TP.HCM và các tỉnh lân cận
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Thời gian làm việc</p>
                  <p className="text-muted-foreground">
                    Thứ 2 - Chủ nhật: 7:00 - 19:00<br />
                    Hỗ trợ khẩn cấp 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1877F2]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-[#1877F2]" />
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Fanpage Facebook</p>
                  <a 
                    href="https://www.facebook.com/share/1K54efbgaz/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:underline"
                  >
                    Theo dõi Kính Tài trên Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="tel:0913019397">
                  <Phone className="w-5 h-5 mr-2" />
                  Gọi Ngay
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="https://zalo.me/0913019397" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Zalo
                </a>
              </Button>
            </div>
          </div>

          {/* Map or Image */}
          <div className="relative">
            <div className="bg-card rounded-xl border border-border overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6694!2d106.6687!3d10.7569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f16d3f5bb7d%3A0x4c0c0c0c0c0c0c0c!2s374%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Ph%C6%B0%E1%BB%9Dng%204%2C%20Qu%E1%BA%ADn%205%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1709726159012!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kính Ô Tô Kính Tài - 374 An Dương Vương, Q.5, TP.HCM"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
