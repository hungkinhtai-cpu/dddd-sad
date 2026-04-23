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
  title: 'Kính Ô Tô Kính Tài - Thay Kính Xe Hơi Quận 5 | 15 Năm Uy Tín',
  description: 'Chuyên thay kính xe hơi chính hãng Veltrio tận nơi tại Quận 5, Bình Tân. Bảo hành 12 tháng.',
  icons: {
    icon: '/logo-kinh-tai.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      {/* KHÔNG DÙNG THẺ <head> Ở ĐÂY NỮA, Metadata của Next.js sẽ tự lo */}
      <body className="font-sans antialiased">
        {/* Dán Script vào đây để tránh lỗi SEO và Hydration */}
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
