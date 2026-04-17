import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/categories";

const data = categories["sweaty-hands-grip-aid"];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function SweatyHandsGripAidPage() {
  return <CategoryPageTemplate data={data} />;
}
