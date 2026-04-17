import type { Metadata } from "next";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/categories";

const data = categories["wet-weather-grip-aid"];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  openGraph: {
    title: data.title,
    description: data.metaDescription,
  },
};

export default function WetWeatherGripAidPage() {
  return <CategoryPageTemplate data={data} />;
}
