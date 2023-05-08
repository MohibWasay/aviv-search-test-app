import { useCallback } from 'react';
import ListingForm from '@components/organisms/ListingForm';
import { useNavigate } from 'react-router-dom';

import styles from './new-listing.module.scss';

import { create } from '@/common/createBem';
import { useListingsStore } from '@/stores/useListingStore';
import { ListingData } from '@/types/listing';

const bem = create(styles, 'new-listing');

export const NewListing = () => {
  const { createListing } = useListingsStore();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (values: ListingData) => {
      await createListing(values);
      navigate('/listings');
    },
    [navigate, createListing],
  );

  return (
    <main className={bem()}>
      <h1 className={bem('title')}>Main Listings page</h1>
      <div className={bem('wrapper')}>
        <section className={bem('section')}>
          <h2 className={bem('sub-title')}>New Listing Form</h2>
          <ListingForm onSubmit={onSubmit} />
        </section>
      </div>
    </main>
  );
};

export default NewListing;
