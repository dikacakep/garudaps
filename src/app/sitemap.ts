import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.garudaps.com',
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 1, 
    },
    // page baru bikin tambahan di sini
  ]
}