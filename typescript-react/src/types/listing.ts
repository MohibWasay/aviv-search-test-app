export type ListingPostalAddress = {
  street_address?: string;
  postal_code?: string;
  city?: string;
  country?: string;
};

export type Listing = {
  id: number;
  name?: string;
  postal_address?: ListingPostalAddress;
  description?: string;
  building_type?: string;
  latest_price_eur?: number;
  surface_area_m2?: number;
  rooms_count?: number;
  bedrooms_count?: number;
  updated_date: string;
  contact_phone_number?: string;
  price_history?: PriceHistoryItem[];
};

export type ListingData = Omit<Listing, 'id' | 'updated_date'>;

export type PriceHistoryItem = {
  created_date: string;
  price_eur: number;
};
