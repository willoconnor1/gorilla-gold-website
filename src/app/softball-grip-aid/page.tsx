import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/categories";

const data = categories["softball-grip-aid"];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function SoftballGripAidPage() {
  return <CategoryPageTemplate data={data} />;
}
