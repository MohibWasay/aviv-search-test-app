import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './listings.module.scss';

import { create } from '@/common/createBem';
import ListingCard from '@/components/organisms/ListingCard';
import { useListingsStore } from '@/stores/useListingStore';

const bem = create(styles, 'listings');

const Listings = () => {
  const navigate = useNavigate();
  const { listings, setSelectedListingById, fetchListings } =
    useListingsStore();

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  const handleRedirect = useCallback(
    (id: number) => {
      navigate(`/listings/${id}/prices`);
      setSelectedListingById(id);
    },
    [navigate, setSelectedListingById],
  );

  return (
    <main className={bem()}>
      <h1 className={bem('title')}>Main Listings page</h1>
      <div className={bem('wrapper')}>
        <section className={bem('section')}>
          <h2 className={bem('sub-title')}>Listings</h2>
          <div className={bem('listings')}>
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onRedirect={handleRedirect}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Listings;
