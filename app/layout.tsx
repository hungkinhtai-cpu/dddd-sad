import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({ 
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kính Ô Tô Kính Tài - Thay Kính Xe Hơi Quận 5 Bình Tân TP.HCM | 15 Năm Uy Tín',
  description: 'Kính Ô Tô Kính Tài - Chuyên thay kính xe hơi chính hãng Veltrio, dịch vụ tận nơi, bảo hành 12 tháng. 15 năm kinh nghiệm tại Quận 5 và Bình Tân TP.HCM.',
  generator: 'v0.app',
  keywords: ['thay kính ô tô', 'kính xe hơi', 'kính Veltrio', 'thay kính tận nơi', 'Quận 5', 'Bình Tân', 'TP.HCM'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnam.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
