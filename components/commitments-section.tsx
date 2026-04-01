import { Shield, Truck, Award, Banknote } from "lucide-react"

const commitments = [
  {
    icon: Shield,
    title: "Kính Chính Hãng 100%",
    description: "Cam kết sử dụng kính Veltrio chính hãng, đạt tiêu chuẩn an toàn quốc tế",
  },
  {
    icon: Truck,
    title: "Dịch Vụ Tận Nơi",
    description: "Đội ngũ kỹ thuật viên đến tận nơi thay kính, tiết kiệm thời gian cho bạn",
  },
  {
    icon: Award,
    title: "Bảo Hành 12 Tháng",
    description: "Chế độ bảo hành dài hạn, hỗ trợ nhanh chóng khi có vấn đề",
  },
  {
    icon: Banknote,
    title: "Giá Cả Hợp Lý",
    description: "Báo giá minh bạch, không phát sinh chi phí. Thanh toán linh hoạt",
  },
]

export function CommitmentsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            4 Cam Kết Của <span className="text-primary">Kính Tài</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
