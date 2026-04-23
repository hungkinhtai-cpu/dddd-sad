import { Phone, FileSearch, Wrench, CheckCircle, MapPin, Clock, DollarSign } from "lucide-react"

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
    <>
      {/* --- PHẦN QUY TRÌNH THAY KÍNH --- */}
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

      {/* --- PHẦN HÀN KÍNH Ô TÔ (MỚI THÊM) --- */}
      <section id="han-kinh" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Cột 1: Hình ảnh so sánh (Tên file: han-kinh-truoc.jpg và han-kinh-sau.jpg) */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="relative">
                      <img 
                        src="/han-kinh-truoc.jpg" 
                        alt="Kính ô tô trước khi hàn" 
                        className="w-full h-[300px] md:h-[450px] object-cover rounded-l-lg"
                      />
                      <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase">Trước</span>
                    </div>
                    <div className="relative">
                      <img 
                        src="/han-kinh-sau.jpg" 
                        alt="Kính ô tô sau khi hàn" 
                        className="w-full h-[300px] md:h-[450px] object-cover rounded-r-lg"
                      />
                      <span className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase">Sau khi hàn</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột 2: Nội dung & Giá cả */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Giải pháp giữ kính zin
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Hàn Kính Ô Tô Chuyên Nghiệp <br /> 
                <span className="text-primary">Giá Chỉ 500.000 VNĐ</span>
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Thay vì thay mới, công nghệ hàn kính giúp bạn giữ lại tấm kính nguyên bản của xe. Xử lý triệt để vết nứt chữ nhện, nứt dài nhanh chóng và thẩm mỹ.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Thực hiện</p>
                    <p className="font-bold text-foreground">30-45 Phút</p>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">Chi phí</p>
                    <p className="font-bold text-green-600">500k / vết</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-left">
                <p className="text-sm italic text-muted-foreground">
                  * Khuyên dùng: Ngay khi kính bị nứt, hãy dán băng keo trong che vết nứt để tránh bụi bẩn, giúp kết quả hàn trong suốt tuyệt đối.
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="https://zalo.me/0903328054" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Gửi hình - Báo giá ngay
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
