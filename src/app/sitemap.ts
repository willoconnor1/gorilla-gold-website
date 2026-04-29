import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gorillagold.com";
  const now = new Date();

  return [
    // Homepage
    { url: baseUrl, lastModified: now, priority: 1.0 },

    // Category pages (priority 0.9)
    { url: `${baseUrl}/golf-grip-aid`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/pickleball-grip-aid`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/tennis-grip-aid`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/wet-weather-grip-aid`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/sweaty-hands-grip-aid`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/active-living-grip`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/grip-aid-comparisons`, lastModified: now, priority: 0.9 },
    { url: `${baseUrl}/softball-grip-aid`, lastModified: now, priority: 0.9 },

    // Shop pages (priority 0.8)
    { url: `${baseUrl}/shop`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/shop/gorilla-gold-golf`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/shop/gorilla-gold-all-sport`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/shop/gorilla-gold-racquet-sports`, lastModified: now, priority: 0.8 },

    // FAQ (priority 0.8)
    { url: `${baseUrl}/faq`, lastModified: now, priority: 0.8 },

    // Blog pages (priority 0.7)
    { url: `${baseUrl}/blog`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/blog/gorilla-gold-vs-rosin`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/blog/gorilla-gold-vs-pine-tar`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/blog/what-is-a-grip-enhancing-towel`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/blog/best-grip-aid-for-rain-golf`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/blog/sweaty-hands-pickleball-solutions`, lastModified: now, priority: 0.7 },

    // Support pages (priority 0.6)
    { url: `${baseUrl}/about`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/testimonials`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/grip-science`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/technology`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/press`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/tournaments`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/international-distributors`, lastModified: now, priority: 0.5 },
  ];
}
