import { create } from 'zustand';

import { Listing, ListingData } from '@/types/listing';

interface ListingsState {
  listings: Listing[];
  selectedListing: Listing | null;
  fetchListings: () => Promise<void>;
  createListing: (l: ListingData) => Promise<void>;
  setSelectedListingById: (id: number) => void;
  fetchPriceHistory: (id: number) => Promise<void>;
}

export const useListingsStore = create<ListingsState>((set, get) => ({
  listings: [],
  selectedListing: null,

  setSelectedListingById: (id) => {
    set({
      selectedListing: get().listings.find((item) => item.id === id) ?? null,
    });
  },

  fetchPriceHistory: async (id) => {
    const response = await fetch(`http://localhost:8080/listings/${id}/prices`);
    const selectedListing = get().selectedListing;
    const priceHistory = await response.json();

    if (selectedListing) {
      set({
        selectedListing: { ...selectedListing, price_history: priceHistory },
      });
    }
  },

  fetchListings: async () => {
    const response = await fetch('http://localhost:8080/listings');
    set({ listings: await response.json() });
  },

  createListing: async (listing) => {
    await fetch('http://localhost:8080/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listing),
    });
  },
}));
