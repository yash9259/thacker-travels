import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.thackertoursandtravels.com";
const DEFAULT_IMAGE = `${BASE_URL}/logo.webp`;
const SITE_NAME = "Thacker Tours & Travels";
const AUTHOR = "Thacker Tours & Travels";
const LOCALE = "en_IN";

export interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  path: string;
  image?: string;
  noindex?: boolean;
  breadcrumbLabel?: string;
}

const buildBreadcrumbs = (path: string, label?: string) => {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE_URL}/`,
    },
  ];

  if (path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: label ?? "Page",
      item: `${BASE_URL}${path}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

const buildTravelAgencyJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  description:
    "Travel agency in Bhuj and Kutch offering taxi services, car rental, one-way and round-trip cab booking, airport pickup, and Kutch sightseeing tour packages including White Rann, Rann of Kutch, Mandvi Beach, and Dholavira heritage tours.",
  url: BASE_URL,
  telephone: ["+91-98792-30104", "+91-99139-00040"],
  email: "thackertravels1@gmail.com",
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: ["Bhuj", "Kutch", "Gujarat", "India"],
  serviceType: [
    "Taxi Service",
    "One Way Taxi",
    "Round Trip Taxi",
    "Cab Booking",
    "Airport Transfer",
    "Car Rental",
    "Tour Packages",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 3, Memon Musafir Khana, Station Road",
    addressLocality: "Bhuj",
    addressRegion: "Gujarat",
    postalCode: "370001",
    addressCountry: "IN",
  },
});

const Seo = ({
  title,
  description,
  keywords,
  path,
  image,
  noindex = false,
  breadcrumbLabel,
}: SeoProps) => {
  const canonical = `${BASE_URL}${path}`;
  const ogImage = image ? `${BASE_URL}${image}` : DEFAULT_IMAGE;
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  const jsonLd = [buildTravelAgencyJsonLd(), buildBreadcrumbs(path, breadcrumbLabel)];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={AUTHOR} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default Seo;
