import { Phone, FileSearch, Wrench, CheckCircle, MapPin } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Liên Hệ Tư Vấn",
    description: "Gọi điện hoặc nhắn Zalo để được tư vấn miễn phí và báo giá nhanh chóng",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Kiểm Tra & Báo Giá",
    description: "Kỹ thuật viên kiểm tra tình trạng kính và đưa ra báo giá chi tiết, minh bạch",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Thay Kính Chuyên Nghiệp",
    description: "Tiến hành thay kính với quy trình chuẩn, đảm bảo an toàn và thẩm mỹ",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Nghiệm Thu & Bảo Hành",
    description: "Kiểm tra kỹ lưỡng sau khi hoàn thành, bàn giao và cấp phiếu bảo hành 12 tháng",
  },
]

export function ProcessSection() {
  return (
    <section id="quy-trinh" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quy Trình <span className="text-primary">Thay Kính</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quy trình làm việc chuyên nghiệp, minh bạch giúp bạn an tâm sử dụng dịch vụ
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
              
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors relative z-10 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- PHẦN VIDEO REELS VÀ ĐỊA CHỈ CHI NHÁNH --- */}
        <div className="flex flex-col items-center pt-12 border-t border-primary/10">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 uppercase text-center">
            Video Quy Trình Thực Tế
          </h3>
          <p className="text-muted-foreground mb-8 italic text-center">
            Cận cảnh thợ Kính Tài thi công chuyên nghiệp cho khách hàng
          </p>
          
          <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">
            <video 
              loop 
              playsInline 
              controls
              preload="none" 
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776802700_f16428e3532f5188f119056345ec8f6a-wp3ieNQq7u8W6m6uT6H8W6m6uT6H8W.jpg" 
              className="w-full h-full object-cover"
            >
              <source src="/quy-trinh-gan-kinh.mp4" type="video/mp4" />
              Trình duyệt không hỗ trợ xem video.
            </video>
          </div>
          
          <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-bold text-foreground uppercase text-sm mb-1">Chi nhánh Quận 5</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  374 An Dương Vương, Phường 4, Quận 5, TP.HCM
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-bold text-foreground uppercase text-sm mb-1">Chi nhánh Bình Tân</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  1/117 Đường số 1, KDC Nam Hùng Vương, P. An Lạc, Bình Tân, TP.HCM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
