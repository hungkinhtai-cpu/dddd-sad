import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({ 
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"], // Chỉ giữ lại weight cần thiết để nhẹ font
  variable: "--font-sans",
  display: 'swap',
});

export const preferredRegion = 'sin1'; // Ép chạy server Singapore

export const metadata: Metadata = {
  title: 'Kính Ô Tô Kính Tài - Thay Kính Xe Hơi Quận 5 | 15 Năm Uy Tín',
  description: 'Chuyên thay kính xe hơi chính hãng Veltrio tận nơi tại Quận 5, Bình Tân. Bảo hành 12 tháng.',
  icons: {
    icon: '/logo-kinh-tai.jpg', // Hãy đổi tên file ảnh logo cho ngắn gọn
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
