import { ImageSourcePropType } from "react-native";

export interface PropertyListingProps {
  propertyName: string;
  rate: number;
  currency: string;
  amount: number;
  location: PropertyLocationProps;
  favorite: boolean;
  image?: ImageSourcePropType;
}

export interface PropertyLocationProps {
  street: string;
  city: string;
  country: string;
}

export interface PropertListing {
  listings: PropertyListingProps[];
}

export interface AcommodationProps {
  Rooms: ImageSourcePropType;
  Mansion: ImageSourcePropType;
  CountrySide: ImageSourcePropType;
  Villa: ImageSourcePropType;
  Tropical: ImageSourcePropType;
  New: ImageSourcePropType;
  Amazing: ImageSourcePropType;
  BeachFront: ImageSourcePropType;
  Luxury: ImageSourcePropType;
  FamilyFriendly: ImageSourcePropType;
  PetFriendly: ImageSourcePropType;
  Secluded: ImageSourcePropType;
  [key: string]: ImageSourcePropType;
}
