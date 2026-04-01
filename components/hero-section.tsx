import { Phone, MessageCircle, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="trang-chu" className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              15 Năm Kinh Nghiệm
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-balance">Chuyên Thay Kính Ô Tô</span>
              <br />
              <span className="text-primary">Chính Hãng Veltrio</span>
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Dịch vụ thay kính xe hơi tận nơi, nhanh chóng, chuyên nghiệp. 
              Bảo hành 12 tháng - Cam kết chất lượng kính chính hãng 100%.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Bảo hành 12 tháng</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Dịch vụ tận nơi</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <a href="tel:0903107097">
                  <Phone className="w-5 h-5 mr-2" />
                  Gọi Ngay: 0903 107 097
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                <a href="https://zalo.me/0903107097" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Zalo
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776853602_6d53eba875bcdb8f420191ddf23e473d-DoWVbcDrRMLsZknHZkN72YO8EovBBg.jpg"
                alt="Thợ kỹ thuật Kính Tài đang thay kính xe Mercedes"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:left-6 bg-card p-4 md:p-6 rounded-xl shadow-xl border border-border max-w-[200px] md:max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">10,000+</p>
                  <p className="text-muted-foreground text-sm">Khách hàng tin tưởng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
