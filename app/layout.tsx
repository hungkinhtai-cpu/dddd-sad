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
  title: 'Hàn Kính 500K & Thay Kính Ô Tô Tận Nơi | Kính Tài Quận 5',
  description: 'Chuyên hàn kính ô tô nứt giá rẻ và thay kính xe hơi chính hãng tại Quận 5, Bình Tân. Kỹ thuật 15 năm kinh nghiệm, giữ kính zin, bảo hành 12 tháng.',
  icons: {
    icon: '/logo-kinh-tai.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Dữ liệu cấu trúc giúp Google định danh cửa hàng (Boost Ranking Local SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Kính Ô Tô Kính Tài",
    "image": "https://kinhototai.com/logo-kinh-tai.jpg",
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
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased">
        {/* Chèn JSON-LD Schema vào để Google ưu tiên hiển thị Maps và Ranking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

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
