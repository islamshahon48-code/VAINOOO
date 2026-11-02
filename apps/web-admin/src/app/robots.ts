import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/owner-gateway/'],
    },
    sitemap: 'https://ffrivalstourbd.shop/sitemap.xml',
  };
}
