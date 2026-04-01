"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Car, Send } from "lucide-react"

const carBrands = [
  "Toyota", "Honda", "Mazda", "Hyundai", "Kia", "Ford", "Mercedes-Benz", 
  "BMW", "Audi", "Lexus", "VinFast", "Mitsubishi", "Nissan", "Suzuki",
  "Chevrolet", "Subaru", "Peugeot", "Volkswagen", "Land Rover", "Porsche", "Khác"
]

const glassTypes = [
  "Kính lái (trước)",
  "Kính hậu (sau)", 
  "Kính hông trái trước",
  "Kính hông trái sau",
  "Kính hông phải trước",
  "Kính hông phải sau",
  "Kính tam giác",
  "Kính cánh",
  "Khác"
]

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carBrand: "",
    carModel: "",
    year: "",
    glassType: "",
    note: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create message for Zalo
    const message = `
KÍNH TÀI - YÊU CẦU BÁO GIÁ NHANH

Họ tên: ${formData.name}
Số điện thoại: ${formData.phone}
Hãng xe: ${formData.carBrand}
Dòng xe: ${formData.carModel}
Năm sản xuất: ${formData.year}
Loại kính cần thay: ${formData.glassType}
${formData.note ? `Ghi chú: ${formData.note}` : ""}

Xin vui lòng báo giá cho tôi. Cảm ơn!
    `.trim()

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Open Zalo with pre-filled message
    window.open(`https://zalo.me/0913019397?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="bao-gia" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Send className="w-4 h-4" />
              Báo Giá Trong 5 Phút
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nhận <span className="text-primary">Báo Giá Nhanh</span> Qua Zalo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Điền thông tin xe của bạn, chúng tôi sẽ gửi báo giá chi tiết qua Zalo trong vòng 5 phút
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập họ tên của bạn"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Số điện thoại <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Nhập số điện thoại"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Car Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Hãng xe <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Chọn hãng xe</option>
                    {carBrands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Dòng xe <span className="text-destructive">*</span>
                  </label>
                  <Input
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    placeholder="VD: Camry, Civic, CX-5..."
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Năm sản xuất
                  </label>
                  <Input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="VD: 2020"
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Glass Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Loại kính cần thay <span className="text-destructive">*</span>
                </label>
                <select
                  name="glassType"
                  value={formData.glassType}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Chọn loại kính</option>
                  {glassTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ghi chú thêm (tùy chọn)
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Mô tả tình trạng kính, yêu cầu đặc biệt..."
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#0068FF] hover:bg-[#0054CC] text-white font-semibold py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Gửi Yêu Cầu Báo Giá Qua Zalo
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Sau khi gửi, bạn sẽ được chuyển đến Zalo để hoàn tất yêu cầu báo giá
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Phản hồi nhanh</p>
                <p className="text-sm text-muted-foreground">Trong 5 phút</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Báo giá chi tiết</p>
                <p className="text-sm text-muted-foreground">Không phát sinh</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Tư vấn miễn phí</p>
                <p className="text-sm text-muted-foreground">Hỗ trợ 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
