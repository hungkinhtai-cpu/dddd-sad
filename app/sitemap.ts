// FILE: app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kinhototai.com', // Thay bằng domain của mày
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Nếu sau này mày có trang /tin-tuc hay /bao-gia thì thêm vào đây
  ]
}
