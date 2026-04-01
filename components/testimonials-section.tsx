import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anh Minh",
    location: "Quận 5, TP.HCM",
    car: "Toyota Camry",
    content: "Dịch vụ rất tốt, kỹ thuật viên nhiệt tình và chuyên nghiệp. Kính thay xong đẹp như mới, giá cả hợp lý. Sẽ giới thiệu cho bạn bè.",
    rating: 5,
  },
  {
    name: "Chị Hương",
    location: "Bình Tân, TP.HCM",
    car: "Mazda CX-5",
    content: "Thay kính tận nơi rất tiện lợi, không cần di chuyển xe. Anh thợ làm việc cẩn thận, sạch sẽ. Bảo hành 12 tháng nên rất yên tâm.",
    rating: 5,
  },
  {
    name: "Anh Tuấn",
    location: "Quận 6, TP.HCM",
    car: "Honda City",
    content: "Đã thay kính ở đây 2 lần, lần nào cũng hài lòng. Giá rẻ hơn hãng nhiều mà chất lượng kính tương đương. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="danh-gia" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Khách Hàng <span className="text-primary">Đánh Giá</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn 10,000 khách hàng đã tin tưởng sử dụng dịch vụ của Kính Tài
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">{item.content}</p>
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{item.name}</p>
                <p className="text-muted-foreground text-sm">{item.car} - {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
