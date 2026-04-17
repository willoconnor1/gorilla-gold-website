import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

interface BreadcrumbsProps {
  items: { name: string; href: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Visual breadcrumb trail removed; schema kept for SEO
  return <BreadcrumbSchema items={items} />;
}
