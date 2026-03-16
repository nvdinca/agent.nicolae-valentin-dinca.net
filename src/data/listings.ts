export type PropertyType = "apartment" | "house" | "villa";

export type Listing = {
  id: string;
  title: string;
  location: string;
  region: string;
  type: PropertyType;
  priceEur: number;
  priceUsd: number;
  priceGbp: number;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
  imageAlt: string;
};

export const listings: Listing[] = [
  {
    id: "1",
    title: "Modern Waterfront Apartment",
    location: "Lisbon, Portugal",
    region: "europe",
    type: "apartment",
    priceEur: 485_000,
    priceUsd: 525_000,
    priceGbp: 415_000,
    beds: 2,
    baths: 2,
    sqm: 95,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    imageAlt: "Modern apartment with sea view",
  },
  {
    id: "2",
    title: "Victorian Townhouse",
    location: "London, UK",
    region: "europe",
    type: "house",
    priceEur: 1_250_000,
    priceUsd: 1_350_000,
    priceGbp: 1_100_000,
    beds: 4,
    baths: 3,
    sqm: 180,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    imageAlt: "Victorian townhouse exterior",
  },
  {
    id: "3",
    title: "Luxury Villa with Pool",
    location: "Dubai, UAE",
    region: "middle-east",
    type: "villa",
    priceEur: 2_100_000,
    priceUsd: 2_280_000,
    priceGbp: 1_800_000,
    beds: 5,
    baths: 5,
    sqm: 420,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    imageAlt: "Villa with pool in Dubai",
  },
  {
    id: "4",
    title: "Central Loft",
    location: "Barcelona, Spain",
    region: "europe",
    type: "apartment",
    priceEur: 620_000,
    priceUsd: 672_000,
    priceGbp: 532_000,
    beds: 3,
    baths: 2,
    sqm: 120,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    imageAlt: "Loft in Barcelona",
  },
  {
    id: "5",
    title: "Garden House",
    location: "Singapore",
    region: "asia",
    type: "house",
    priceEur: 1_850_000,
    priceUsd: 2_000_000,
    priceGbp: 1_580_000,
    beds: 4,
    baths: 4,
    sqm: 280,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "House with garden",
  },
  {
    id: "6",
    title: "Penthouse with Terrace",
    location: "Paris, France",
    region: "europe",
    type: "apartment",
    priceEur: 1_950_000,
    priceUsd: 2_120_000,
    priceGbp: 1_680_000,
    beds: 3,
    baths: 3,
    sqm: 165,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    imageAlt: "Penthouse terrace view",
  },
];

export const regions = [
  { id: "europe", label: "Europe" },
  { id: "middle-east", label: "Middle East" },
  { id: "asia", label: "Asia" },
] as const;
