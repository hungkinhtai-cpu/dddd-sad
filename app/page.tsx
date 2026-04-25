import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CommitmentsSection } from "@/components/commitments-section"
import { VeltrioSection } from "@/components/veltrio-section"
import { ProductsSection } from "@/components/products-section"
import { ProcessSection } from "@/components/process-section"
import { QuoteSection } from "@/components/quote-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header chứa Navigation giúp Google connect các link nội bộ */}
      <Header />
      
      {/* Article giúp Google hiểu đây là một nội dung bài viết hoàn chỉnh về dịch vụ */}
      <article>
        {/* Section quan trọng nhất chứa H1 */}
        <HeroSection />

        {/* Các Section bổ trợ nội dung, giúp bùng nổ từ khóa liên quan */}
        <section id="cam-ket" aria-label="Cam kết dịch vụ">
          <CommitmentsSection />
        </section>

        <section id="thuong-hieu" aria-label="Đối tác kính Veltrio">
          <VeltrioSection />
        </section>

        <section id="dich-vu" aria-label="Dịch vụ thay kính ô tô">
          <ProductsSection />
        </section>

        <section id="quy-trinh" aria-label="Quy trình hàn kính chuyên nghiệp">
          <ProcessSection />
        </section>

        <section id="bao-gia" aria-label="Báo giá hàn kính và thay kính">
          <QuoteSection />
        </section>

        <section id="thu-vien" aria-label="Hình ảnh thi công thực tế">
          <GallerySection />
        </section>

        <section id="danh-gia" aria-label="Khách hàng nói về Kính Tài">
          <TestimonialsSection />
        </section>

        <section id="lien-he" aria-label="Thông tin liên hệ">
          <ContactSection />
        </section>
      </article>

      <Footer />
      
      {/* Nút bấm nổi giúp tăng tương tác từ traffic user */}
      <FloatingButtons />
    </main>
  )
}
