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
      <Header />
      <HeroSection />
      <CommitmentsSection />
      <VeltrioSection />
      <ProductsSection />
      <ProcessSection />
      <QuoteSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
