import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home 2", href: "/home-2" },
  {
    label: "Sports",
    href: "/golf-grip-aid",
    children: [
      { label: "Golf", href: "/golf-grip-aid" },
      { label: "Pickleball", href: "/pickleball-grip-aid" },
      { label: "Tennis", href: "/tennis-grip-aid" },
      { label: "Softball / Baseball", href: "/softball-grip-aid" },
      { label: "Active Living", href: "/active-living-grip" },
      { label: "Wet Weather", href: "/wet-weather-grip-aid" },
      { label: "Sweaty Hands", href: "/sweaty-hands-grip-aid" },
      { label: "Comparisons", href: "/grip-aid-comparisons" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "How to Use", href: "/how-to-use" },
      { label: "Grip Science", href: "/grip-science" },
      { label: "Technology & Innovation", href: "/technology" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Tournaments", href: "/tournaments" },
      { label: "International Distributors", href: "/international-distributors" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  products: [
    { label: "Gorilla Gold Golf", href: "/shop/gorilla-gold-golf" },
    { label: "Gorilla Gold All-Sport", href: "/shop/gorilla-gold-all-sport" },
    { label: "Gorilla Gold Softball/Baseball", href: "/shop/gorilla-gold-softball-baseball" },
    { label: "All Products", href: "/shop" },
  ],
  sports: [
    { label: "Golf Grip Aid", href: "/golf-grip-aid" },
    { label: "Pickleball Grip Aid", href: "/pickleball-grip-aid" },
    { label: "Tennis Grip Aid", href: "/tennis-grip-aid" },
    { label: "Softball / Baseball", href: "/softball-grip-aid" },
    { label: "Wet Weather Grip Aid", href: "/wet-weather-grip-aid" },
    { label: "Sweaty Hands Grip Aid", href: "/sweaty-hands-grip-aid" },
    { label: "Active Living", href: "/active-living-grip" },
  ],
  company: [
    { label: "About Gorilla Gold", href: "/about" },
    { label: "How to Use", href: "/how-to-use" },
    { label: "Grip Science", href: "/grip-science" },
    { label: "Technology & Innovation", href: "/technology" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Tournaments", href: "/tournaments" },
    { label: "International Distributors", href: "/international-distributors" },
    { label: "Press", href: "/press" },
    { label: "FAQ", href: "/faq" },
    { label: "Grip Aid Comparisons", href: "/grip-aid-comparisons" },
    { label: "Blog", href: "/blog" },
  ],
};
