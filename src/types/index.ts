export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  images: ProductImage[];
  variants: ProductVariant[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  tags: string[];
  availableForSale: boolean;
}

export interface ProductImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: Money;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
      images: ProductImage[];
    };
    price: Money;
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: Money;
    subtotalAmount: Money;
  };
  lines: CartItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  quote: string;
  sport: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CategoryPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  introText: string;
  problemStatement: string;
  heroImage?: string;
  heroImageAlt?: string;
  fullBleedHero?: boolean;
  useCases: UseCase[];
  comparisonPoints: ComparisonPoint[];
  faqs: FAQItem[];
  testimonialIds: string[];
  relatedProducts: string[];
  relatedCategories: RelatedLink[];
  relatedContent: RelatedLink[];
  sport: string;
}

export interface ComparisonPoint {
  feature: string;
  gorillaGold: string;
  alternative: string;
  alternativeName: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  author: string;
  category: "comparison" | "how-to" | "explainer" | "guide";
  excerpt: string;
  heroImage?: string;
  heroImageAlt?: string;
  sections: BlogSection[];
  faqs?: FAQItem[];
  relatedProducts: string[];
  relatedCategories: RelatedLink[];
  relatedPosts: string[];
  tags: string[];
}

export interface BlogSection {
  heading: string;
  content: string;
  image?: string;
  imageAlt?: string;
}

export interface ProductPageData {
  handle: string;
  name: string;
  tagline: string;
  metaDescription: string;
  description: string;
  features: string[];
  sports: string[];
  skus: { name: string; sku: string; packSize: string; price: string }[];
  images: { src: string; alt: string }[];
  relatedCategories: RelatedLink[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
