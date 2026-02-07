// Advanced SEO utilities for Bhuj taxi and Kutch tours

export const seoKeywords = {
  bhujTaxi: [
    "Bhuj taxi service",
    "Bhuj cab booking",
    "taxi service Bhuj",
    "cab in Bhuj",
    "Bhuj transportation",
    "Bhuj ride service",
  ],
  oneWayTaxi: [
    "one way taxi Bhuj",
    "one way cab Bhuj",
    "point to point taxi Bhuj",
    "single journey taxi Bhuj",
    "Bhuj to other cities taxi",
  ],
  roundTripTaxi: [
    "round trip taxi Bhuj",
    "round trip cab Bhuj",
    "round trip service Bhuj",
    "return journey taxi Bhuj",
  ],
  kutchTours: [
    "Kutch tours",
    "Kutch tour packages",
    "Kutch tourism",
    "Kutch sightseeing",
    "Kutch travel packages",
    "Kutch trip planning",
  ],
  whiteRann: [
    "White Rann tour",
    "White Rann visit",
    "White Rann Bhuj",
    "White Rann taxi",
    "Bhuj to White Rann",
    "White Rann exploration",
  ],
  rannUtsav: [
    "Rann Utsav booking",
    "Rann Utsav packages",
    "Rann Utsav tent city",
    "Rann Utsav tour",
    "Rann Utsav accommodation",
  ],
  mandvi: [
    "Mandvi beach tour",
    "Mandvi beach taxi",
    "Mandvi Bhuj",
    "Mandvi tourism",
    "Mandvi trip",
  ],
  airportTransfer: [
    "Bhuj airport transfer",
    "airport taxi Bhuj",
    "airport to Bhuj taxi",
    "airport transfer service Bhuj",
  ],
  vehicles: [
    "Toyota Innova Bhuj",
    "Tempo Traveller Bhuj",
    "Maruti Ertiga Bhuj",
    "Swift Dzire Bhuj",
    "Honda Amaze Bhuj",
    "Force Urbania Bhuj",
  ],
  locationBased: [
    "Kutch taxi service",
    "Kutch cab booking",
    "Gujarat taxi service",
    "Bhuj travel agency",
    "Kutch travel expert",
  ],
};

export const generateServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `${serviceName} - Thacker Tours & Travels`,
  description: description,
  url: "https://thackertravels.com",
  telephone: "+91-98792-30104",
  email: "thackertravels1@gmail.com",
  areaServed: ["Bhuj", "Kutch", "Gujarat"],
  priceRange: "$$",
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const bhujTaxiFAQs = [
  {
    question: "What is the cost of one-way taxi from Bhuj to White Rann?",
    answer:
      "One-way taxi from Bhuj to White Rann typically costs ₹500-1000 depending on vehicle type (Swift Dzire, Innova, etc.). Contact us for current rates.",
  },
  {
    question: "Do you offer round-trip taxi service in Bhuj?",
    answer:
      "Yes, we offer round-trip taxi service for Kutch tours. You can hire a vehicle for multiple days and explore White Rann, Mandvi, Kala Dungar, and other destinations.",
  },
  {
    question: "Are drivers experienced for Kutch tours?",
    answer:
      "All our drivers are experienced local guides with deep knowledge of Kutch, making them perfect for White Rann, Rann Utsav, and other tour destinations.",
  },
  {
    question: "Can I book a Tempo Traveller for group tours in Kutch?",
    answer:
      "Yes, we have Tempo Travellers (9-26 seater) perfect for group tours across Kutch and Gujarat. Ideal for family trips and corporate outings.",
  },
  {
    question: "Do you provide airport transfer services from Bhuj?",
    answer:
      "Yes, we offer 24×7 airport transfer services from Bhuj Airport to hotels and destinations across Kutch.",
  },
];
