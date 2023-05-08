import { useEffect } from 'react';
import { useParams } from 'react-router';

import styles from './prices-history.module.scss';

import ListingCard from '@/components/organisms/ListingCard';
import PricesHistoryCard from '@/components/organisms/PriceHistoryCard';
import { useListingsStore } from '@/stores/useListingStore';

const PricesHistory = () => {
  const { id } = useParams();
  const { fetchPriceHistory, selectedListing } = useListingsStore();

  useEffect(() => {
    if (id) fetchPriceHistory(Number(id));
  }, [id, fetchPriceHistory]);

  if (!selectedListing) {
    return (
      <div className={styles['container']}>
        <p>No listing item with id: {id} exists</p>
      </div>
    );
  }

  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      <PricesHistoryCard priceHistory={selectedListing.price_history} />
      <ListingCard listing={selectedListing} />

      <a href="/listings" className={styles['link']}>
        &larr; Back Home
      </a>
    </div>
  );
};
export default PricesHistory;
