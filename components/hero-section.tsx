"use client"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="trang-chu" className="relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Background động */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" 
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Cột Content: Bay từ bên trái vào */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              15 Năm Kinh Nghiệm Tại Quận 5
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="text-balance">Chuyên Thay Kính Ô Tô</span>
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-primary"
              >
                Chính Hãng Veltrio
              </motion.span>
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Dịch vụ thay kính xe hơi tận nơi, nhanh chóng, chuyên nghiệp. 
              Bảo hành 12 tháng - Cam kết chất lượng kính chính hãng 100%.
            </p>

            {/* Quick Stats: Hiện lần lượt */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { icon: Shield, text: "Bảo hành 12 tháng" },
                { icon: Clock, text: "Dịch vụ tận nơi" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i * 0.2) }}
                  className="flex items-center gap-2"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons: Hiệu ứng Hover nhún */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 w-full sm:w-auto">
                  <a href="tel:0913019397">
                    <Phone className="w-5 h-5 mr-2" />
                    Gọi Ngay: 0913 019 397
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 w-full sm:w-auto"
                >
                  <a href="https://zalo.me/0913019397" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat Zalo
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Cột Ảnh: Hiệu ứng Phóng to + Bồng bềnh */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776853602_6d53eba875bcdb8f420191ddf23e473d-DoWVbcDrRMLsZknHZkN72YO8EovBBg.jpg"
                alt="Thợ kỹ thuật Kính Tài đang thay kính xe Mercedes"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Thẻ Floating: Bay từ dưới lên */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 md:left-6 bg-card p-4 md:p-6 rounded-xl shadow-xl border border-border max-w-[200px] md:max-w-xs z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">10,000+</p>
                  <p className="text-muted-foreground text-sm">Khách hàng tin tưởng</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
