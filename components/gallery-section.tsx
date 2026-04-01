"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776802700_f16322ecb11242baf30b199e6e6b7594-wp3ieNQqHIhAjuI4ZVNuDyUjxrI2Hd.jpg",
    alt: "Cửa hàng Kính Xe Hơi Kính Tài về đêm với bảng hiệu Veltrio",
    caption: "Cửa hàng Kính Tài - 374 An Dương Vương, Quận 5"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776791127_3cee89383c96d48b45a17235e4a8f118-1WbvBsU1nTA5jSBUzYAKW2aGpZ5xVk.jpg",
    alt: "Thay kính xe Mercedes tại cửa hàng Kính Tài",
    caption: "Thay kính xe Mercedes ngay tại cửa hàng"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776814765_28af7d0b7e34f45254260bd0e138dbeb-xkR549d5XWoORp1I2VW6O5n2wyyX1c.jpg",
    alt: "Kho kính ô tô Kính Tài với hàng trăm loại kính",
    caption: "Kho kính đa dạng cho mọi dòng xe"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776813430_dd86f561628e29e3332151d5b9700dd6-VTytarYTGX1tV6qPVzWYa01zJNeQIm.jpg",
    alt: "Kho hàng nhập khẩu kính ô tô chính hãng",
    caption: "Nhập khẩu trực tiếp từ nhà máy"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776798285_86c60c50a5912b3c3e59f731e4644de3-4255JKh4OvVTaSxwcWXO7n6Pbm4qR7.jpg",
    alt: "Container hàng kính ô tô nhập khẩu",
    caption: "Nhập hàng container kính chính hãng"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776853602_6d53eba875bcdb8f420191ddf23e473d-DoWVbcDrRMLsZknHZkN72YO8EovBBg.jpg",
    alt: "Thợ kỹ thuật thay kính xe Mercedes S-Class",
    caption: "Dịch vụ thay kính tận nơi chuyên nghiệp"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776885205_99b0a05c88e8c482c2ed5e7b679d13a4-hUuj96VaafYXeDFOmw1rQHrquKiSEp.jpg",
    alt: "Xe Mercedes GL thay kính tại xưởng",
    caption: "Thay kính xe Mercedes GL"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776821155_f6eba2384466962685f6147f89f437c3-oUUDj8uFnSIPuHbLkgdegC0Jt0flwq.jpg",
    alt: "Xe bán tải Ford thay kính",
    caption: "Thay kính xe Ford Raptor"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776824756_c5631867197fc04a83bc4eef224c8c6a-uH0H1tpdytZYCRpVT10WV0DFjdE6D2.jpg",
    alt: "Xe Mitsubishi trong xưởng thay kính với đèn LED",
    caption: "Xưởng thay kính hiện đại"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z7680776831007_2f5ba50c05e83fafb855fdb9e916b98a-PQcwqRiFaE9ZFIujR59QttU78KIVL9.jpg",
    alt: "Xe Suzuki XL7 thay kính",
    caption: "Thay kính xe Suzuki XL7"
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Hình Ảnh <span className="text-primary">Thực Tế</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hình ảnh cửa hàng, kho hàng và các công trình thay kính thực tế tại Kính Tài
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Đóng"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Ảnh sau"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
