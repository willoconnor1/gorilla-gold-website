interface ProductSchemaProps {
  name: string;
  description: string;
  brand?: string;
  image: string;
  sku: string;
  price: string;
  currency?: string;
  availability?: string;
  url: string;
  ratingValue?: number;
  reviewCount?: number;
}

export function ProductSchema({
  name,
  description,
  brand = "Gorilla Gold",
  image,
  sku,
  price,
  currency = "USD",
  availability = "https://schema.org/InStock",
  url,
  ratingValue,
  reviewCount,
}: ProductSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability,
      url,
    },
  };

  if (ratingValue !== undefined && reviewCount !== undefined) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
