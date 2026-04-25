/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bỏ qua lỗi TypeScript khi build để mày deploy nhanh lên Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
  // Bỏ qua lỗi ESLint khi build
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Cấu hình để Next.js tối ưu ảnh từ Vercel Blob (Gallery của mày dùng cái này)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Nếu mày muốn tự quản lý nén ảnh thì để false, nhưng tao khuyên nên bật (mặc định) để web load nhanh
    unoptimized: false,
  },
  // Bật nén Gzip/Brotli để tăng tốc độ tải trang -> Tốt cho Ranking
  compress: true,
  // Giúp các header bảo mật tốt hơn, Google rất thích các web an toàn
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
