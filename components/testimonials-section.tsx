"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronDown } from "lucide-react"

// Nhóm 1: Có ảnh thực tế (Hiện ra ngoài luôn)
const reviewsWithImages = [
  {
    name: "Anh Hoàng - Quận 5",
    car: "Mercedes-Benz S-Class",
    comment: "Kỹ thuật viên tại Kính Tài tay nghề rất cứng, lắp đặt chiếc S-Class của mình cực kỳ tỉ mỉ, không một vết gợn.",
    image: "/review-mercedes-black.jpg",
    rating: 5
  },
  {
    name: "Chị Lan - Bình Tân",
    car: "Porsche Panamera",
    comment: "Dịch vụ thay kính tận nơi rất tiện lợi. Kính Veltrio chính hãng nhìn trong suốt, đi đường rất thích.",
    image: "/review-porsche.jpg",
    rating: 5
  },
  {
    name: "Anh Hùng - Quận 7",
    car: "Range Rover Sport",
    comment: "Giá cả minh bạch, không phát sinh chi phí. Đội ngũ nhiệt tình, làm xong còn vệ sinh sạch sẽ cho xe mình.",
    image: "/review-range-rover.jpg",
    rating: 5
  },
  {
    name: "Bác Thành - Quận 10",
    car: "Lexus GX460",
    comment: "Đã thay kính ở đây 2 lần, lần nào cũng hài lòng. Giá tốt hơn hãng nhiều mà chất lượng kính tương đương.",
    image: "/review-lexus-white.jpg",
    rating: 5
  },
  {
    name: "Anh Minh - Quận 3",
    car: "Mercedes C-Class",
    comment: "Màu kính Veltrio phối với xe đỏ nhìn rất sang. Thời gian thi công nhanh, kịp cho mình đi công việc gấp.",
    image: "/review-mercedes-red.jpg",
    rating: 5
  }
]

// Nhóm 2: Không có ảnh (Giấu vào xem thêm)
const textOnlyReviews = [
  {
    name: "Anh Minh",
    car: "Toyota Camry",
    comment: "Dịch vụ rất tốt, kỹ thuật viên nhiệt tình và chuyên nghiệp. Kính thay xong đẹp như mới, giá cả hợp lý.",
    rating: 5,
  },
  {
    name: "Chị Hương",
    car: "Mazda CX-5",
    comment: "Thay kính tận nơi rất tiện lợi, không cần di chuyển xe. Anh thợ làm việc cẩn thận, sạch sẽ. Bảo hành 12 tháng nên rất yên tâm.",
    rating: 5,
  },
  {
    name: "Anh Tuấn",
    car: "Honda City",
    comment: "Đã thay kính ở đây 2 lần, lần nào cũng hài lòng. Giá rẻ hơn hãng nhiều mà chất lượng tương đương.",
    rating: 5,
  }
]

export function TestimonialsSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="danh-gia" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Khách Hàng <span className="text-primary">Đánh Giá</span></h2>
          <p className="text-muted-foreground">Hình ảnh thi công thực tế tại xưởng Kính Tài Quận 5</p>
        </div>

        {/* PHẦN HIỆN ẢNH THỰC TẾ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {reviewsWithImages.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={review.image} alt={review.car} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 relative">
                <Quote className="absolute top-4 right-6 w-8 h-8 text-primary/10" />
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic mb-4 text-sm leading-relaxed">"{review.comment}"</p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">{review.car}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PHẦN ĐÁNH GIÁ CHỮ (ẨN/HIỆN) */}
        <AnimatePresence>
          {showMore && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
            >
              {textOnlyReviews.map((item, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-xl border border-border">
                  <div className="flex gap-1 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-sm italic mb-4">"{item.comment}"</p>
                  <p className="font-bold text-sm">{item.name} - <span className="text-primary">{item.car}</span></p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg"
          >
            {showMore ? "Thu gọn" : "Xem thêm các đánh giá khác"}
            <motion.div animate={{ rotate: showMore ? 180 : 0 }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  )
}
