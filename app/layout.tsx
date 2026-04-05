import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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
    icon: '/z7680776867254_c2d23a0384271162dd1c969c04efa997.jpg',
    apple: '/z7680776867254_c2d23a0384271162dd1c969c04efa997.jpg',
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

        {/* --- PHẦN DÁN CODE BUFF TRAFFIC VÀO CUỐI TRANG --- */}
        <footer className="mt-10 pb-5 flex justify-center">
          <Script src="https://s.traffic100.com/s/script-100.js" strategy="lazyOnload" />
          <div 
            id="get-code-website" 
            style={{ 
              display: 'inline-block',
              width: '200px',
              height: '50px',
              paddingTop: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              textAlign: 'center',
              borderRadius: '8px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            <span>Lấy Code</span>
          </div>
        </footer>
        {/* ----------------------------------------------- */}
      </body>
    </html>
  )
}
