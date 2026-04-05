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
    <section id="danh-gia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Khách Hàng <span className="text-primary">Đánh Giá</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn 10,000 khách hàng đã tin tưởng sử dụng dịch vụ của Kính Tài
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
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

        {/* --- PHẦN QUY TRÌNH GẮN KÍNH THỰC TẾ --- */}
        <div className="flex flex-col items-center pt-8 border-t border-border">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 uppercase text-center">
            Quy trình gắn kính chuyên nghiệp
          </h3>
          <p className="text-muted-foreground mb-8 italic text-center">
            Cận cảnh thợ Kính Tài thi công trực tiếp cho khách hàng
          </p>
          
          <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
            <iframe 
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F17Fo94qEw3%2F&show_text=false&width=267&t=0" 
              width="100%" 
              height="100%" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          
          <div className="mt-6">
            <a 
              href="https://www.facebook.com/share/r/17Fo94qEw3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline flex items-center gap-2"
            >
              Xem clip gốc trên Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
