import { PropertyListingProps, AcommodationProps } from "@/interfaces";

const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Villa Arrciffee Beach House",
    location: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA",
    },
    rate: 4.76,
    currency: "$",
    amount: 620,
    favorite: false,
    image: require("@/assets/images/listing-images/List 1.png"),
  },
  {
    propertyName: "Sunset Paradise Villa",
    location: {
      street: "456 Beachfront Lane",
      city: "Cancun",
      country: "Mexico",
    },
    rate: 4.85,
    currency: "$",
    amount: 750,
    favorite: true,
    image: require("@/assets/images/listing-images/List 10.png"),
  },
  {
    propertyName: "Golden Sands Retreat",
    location: {
      street: "789 Coastal Road",
      city: "Gold Coast",
      country: "Australia",
    },
    rate: 4.92,
    currency: "$",
    amount: 900,
    favorite: false,
    image: require("@/assets/images/listing-images/List 11.png"),
  },
  {
    propertyName: "Azure Horizon Cottage",
    location: {
      street: "321 Seaside Avenue",
      city: "Nice",
      country: "France",
    },
    rate: 4.78,
    currency: "$",
    amount: 680,
    favorite: false,
    image: require("@/assets/images/listing-images/List 12.png"),
  },
  {
    propertyName: "Palm Haven Villa",
    location: {
      street: "654 Palm Street",
      city: "Bali",
      country: "Indonesia",
    },
    rate: 4.88,
    currency: "$",
    amount: 1200,
    favorite: true,
    image: require("@/assets/images/listing-images/List 9.png"),
  },
  {
    propertyName: "Ocean Breeze Mansion",
    location: {
      street: "987 Marina Drive",
      city: "Dubai",
      country: "UAE",
    },
    rate: 4.95,
    currency: "$",
    amount: 2500,
    favorite: false,
    image: require("@/assets/images/listing-images/List 13.png"),
  },
  {
    propertyName: "Seaside Serenity House",
    location: {
      street: "147 Ocean View Road",
      city: "Phuket",
      country: "Thailand",
    },
    rate: 4.81,
    currency: "$",
    amount: 1500,
    favorite: false,
    image: require("@/assets/images/listing-images/List 14.png"),
  },
  {
    propertyName: "Coral Reef Villa",
    location: {
      street: "258 Coral Lane",
      city: "Maldives",
      country: "Maldives",
    },
    rate: 4.89,
    currency: "$",
    amount: 850,
    favorite: false,
    image: require("@/assets/images/listing-images/List 15.png"),
  },
  {
    propertyName: "Tropical Bliss Retreat",
    location: {
      street: "369 Palm Beach Road",
      city: "Maui",
      country: "USA",
    },
    rate: 4.83,
    currency: "$",
    amount: 720,
    favorite: false,
    image: require("@/assets/images/listing-images/List 16.png"),
  },
  {
    propertyName: "Emerald Bay Cottage",
    location: {
      street: "741 Bayfront Avenue",
      city: "Santorini",
      country: "Greece",
    },
    rate: 4.9,
    currency: "$",
    amount: 780,
    favorite: true,
    image: require("@/assets/images/listing-images/List 2.png"),
  },
];

const FILTERS: string[] = [
  "Mansion",
  "CountrySide",
  "Villa",
  "Tropical",
  "New",
  "Amazing",
  "BeachFront",
  "Luxury",
  "FamilyFriendly",
  "PetFriendly",
  "Secluded",
];

// Data for types of accommodation

const TypesOfAcommodation: AcommodationProps = {
  Secluded: require("@/assets/images/logos/home 1.png"),
  Rooms: require("@/assets/images/logos/living-room 1.png"),
  Mansion: require("@/assets/images/logos/mansion 1.png"),
  CountrySide: require("@/assets/images/logos/farm 1.png"),
  Villa: require("@/assets/images/logos/villa 1.png"),
  Tropical: require("@/assets/images/logos/palm-tree 1.png"),
  New: require("@/assets/images/logos/key-chain 1.png"),
  Amazing: require("@/assets/images/logos/swimming-pool 1.png"),
  BeachFront: require("@/assets/images/logos/vacations 1.png"),
  Luxury: require("@/assets/images/logos/island (1) 1.png"),
  FamilyFriendly: require("@/assets/images/logos/tent 1.png"),
  PetFriendly: require("@/assets/images/logos/apartment 1.png"),
};

export { SAMPLE_DATA, FILTERS, TypesOfAcommodation };
