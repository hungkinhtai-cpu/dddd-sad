import { Phone, FileSearch, Wrench, CheckCircle } from "lucide-react"

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
              
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors relative z-10">
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
      </div>
    </section>
  )
}
