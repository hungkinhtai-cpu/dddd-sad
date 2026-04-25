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

// PHẦN SEO: Đã gộp cả Hàn và Thay kính để bùng nổ thứ hạng
export const metadata: Metadata = {
  title: 'Hàn Kính 500K & Thay Kính Ô Tô Tận Nơi | Kính Tài Quận 5',
  description: 'Chuyên hàn kính ô tô nứt giá rẻ và thay kính xe hơi chính hãng tại Quận 5, Bình Tân. Kỹ thuật 15 năm kinh nghiệm, giữ kính zin, bảo hành 12 tháng.',
  icons: {
    icon: '/logo-kinh-tai.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased">
        {/* Google Tag (gtag.js) cho Google Ads */}
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
