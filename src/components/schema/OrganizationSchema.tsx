export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gorilla Gold",
    url: "https://www.gorillagold.com",
    logo: "https://www.gorillagold.com/wp-content/uploads/2017/03/retlogo1finala.jpg",
    description:
      "Gorilla Gold is a grip-enhancing towel that helps athletes and active users improve control in wet, sweaty, and slippery conditions across golf, racquet sports, pickleball, bowls, and more.",
    email: "sales@gorillagold.com",
    telephone: "+1-818-259-9437",
    sameAs: [
      "https://www.facebook.com/gorillagold",
      "https://www.instagram.com/gorillagold",
      "https://twitter.com/gorillagold",
    ],
    brand: {
      "@type": "Brand",
      name: "Gorilla Gold",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-818-259-9437",
      contactType: "sales",
      email: "sales@gorillagold.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
