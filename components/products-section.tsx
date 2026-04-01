import { Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Kính Lái (Trước)",
    description: "Kính chắn gió phía trước xe, đảm bảo tầm nhìn tối ưu cho người lái",
    features: ["Kính cường lực an toàn", "Chống tia UV", "Độ trong suốt cao", "Phù hợp mọi dòng xe"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776836874_530fc6c822e7ffd3ac173e70dd0f6297-shKGlIqe0OLBEYT4hhh86w6ePBD8xH.jpg",
  },
  {
    name: "Kính Hậu (Sau)",
    description: "Kính phía sau xe với chức năng sấy kính tích hợp",
    features: ["Tích hợp dây sấy kính", "Chống chói", "Độ bền cao", "Lắp đặt chuẩn xác"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776848244_6eccaa74c31bd85206a58ee9aeae8967-p7G019CN9P2UUGZCgx87MSgS2ZkdqT.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="san-pham" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Sản Phẩm Kính Ô Tô</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kính lái và kính hậu chất lượng cao, phù hợp với tất cả các dòng xe phổ biến
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl md:text-2xl font-bold text-white">
                  {product.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="tel:0913019397">
                    <Phone className="w-4 h-4 mr-2" />
                    Báo Giá Ngay
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
