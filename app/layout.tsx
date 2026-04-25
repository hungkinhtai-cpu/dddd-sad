import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script' 
import './globals.css'

const beVietnam = Be_Vietnam_Pro({ 
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: 'swap',
});

export const preferredRegion = 'sin1';

export const metadata: Metadata = {
  // Tiêu đề tối ưu để bùng nổ từ trang 2 lên trang 1
  title: 'Hàn Kính Nứt 500K & Thay Kính Ô Tô Tận Nơi | Kính Tài Quận 5 - 15 Năm Uy Tín',
  description: 'Dịch vụ hàn kính ô tô nứt giá rẻ từ 500k và thay kính xe hơi chính hãng Veltrio tại Quận 5, TPHCM. Kỹ thuật 15 năm kinh nghiệm, phục vụ tận nhà 24/7, giữ kính zin, bảo hành dài hạn.',
  keywords: [
    "hàn kính ô tô quận 5",
    "thay kính xe hơi tphcm",
    "hàn kính nứt ô tô giá rẻ",
    "kính ô tô kính tài",
    "thay kính ô tô tận nơi",
    "kính xe hơi veltrio"
  ],
  metadataBase: new URL('https://kinhototai.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    // Đã cập nhật đúng tên file "favicon.ico.jpg" của mày
    icon: '/favicon.ico.jpg',
    shortcut: '/favicon.ico.jpg',
    apple: '/favicon.ico.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dữ liệu cấu trúc giúp Google định danh cửa hàng (Cực kỳ quan trọng cho Local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Kính Ô Tô Kính Tài",
    "image": "https://kinhototai.com/favicon.ico.jpg",
    "@id": "https://kinhototai.com",
    "url": "https://kinhototai.com",
    "telephone": "0913019397",
    "priceRange": "500.000đ - 10.000.000đ",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "374 An Dương Vương, Phường 4",
      "addressLocality": "Quận 5",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.7601,
      "longitude": 106.6712
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "07:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased">
        {/* Chèn JSON-LD để Google connect địa chỉ Maps với website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager / Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18065765838"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18065765838');
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
