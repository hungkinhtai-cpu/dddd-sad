"use client"
import { motion } from "framer-motion"
import { Shield, Award, Globe, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Chất Lượng Châu Âu",
    description: "Sản xuất theo tiêu chuẩn công nghệ Italy, đảm bảo độ bền và an toàn tối đa",
  },
  {
    icon: Award,
    title: "Chứng Nhận Quốc Tế",
    description: "Đạt các chứng nhận ECE, DOT, AS/NZS và nhiều tiêu chuẩn quốc tế khác",
  },
  {
    icon: Globe,
    title: "Phân Phối Toàn Cầu",
    description: "Có mặt tại hơn 50 quốc gia trên thế giới, được tin dùng rộng rãi",
  },
]

const specs = [
  "Kính cường lực 2 lớp Laminated",
  "Chống tia UV 99%",
  "Giảm tiếng ồn hiệu quả",
  "Chống vỡ vụn an toàn",
  "Độ trong suốt cao",
  "Phù hợp mọi dòng xe",
]

export function VeltrioSection() {
  return (
    <section id="veltrio" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Cột Nội Dung: Bay từ trái vào */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              Đối Tác Chính Hãng
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Kính Ô Tô <span className="text-primary">VELTRIO</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>VELTRIO - TECNICHE DI VETRO</strong> là thương hiệu kính ô tô hàng đầu thế giới 
              với công nghệ sản xuất từ Italy. Kính Tài tự hào là đại lý phân phối chính thức 
              tại Việt Nam với hơn 15 năm kinh nghiệm.
            </p>

            {/* Các thẻ tính năng hiện lần lượt */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-card p-4 rounded-xl border border-border shadow-sm"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Bảng thông số kỹ thuật */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">Đặc Điểm Nổi Bật</h3>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Cột Hình Ảnh: Bay từ phải vào và so le */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-primary/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776802700_f16322ecb11242baf30b199e6e6b7594-wp3ieNQqHIhAjuI4ZVNuDyUjxrI2Hd.jpg"
                    alt="Cửa hàng Kính Tài - Đại lý Veltrio chính hãng"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 pt-8"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-primary/10">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776814765_28af7d0b7e34f45254260bd0e138dbeb-xkR549d5XWoORp1I2VW6O5n2wyyX1c.jpg"
                    alt="Kho kính Veltrio tại Kính Tài"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Huy hiệu trung tâm */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg z-20"
            >
              <p className="font-bold text-sm whitespace-nowrap uppercase tracking-wider">Đại Lý Chính Hãng Veltrio</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
