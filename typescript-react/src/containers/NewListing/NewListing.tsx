import ListingForm from '@components/organisms/ListingForm';

import styles from './new-listing.module.scss';

import { create } from '@/common/createBem';

const bem = create(styles, 'new-listing');

export const NewListing = () => {
  return (
    <main className={bem()}>
      <h1 className={bem('title')}>Main Listings page</h1>
      <div className={bem('wrapper')}>
        <section className={bem('section')}>
          <h2 className={bem('sub-title')}>New Listing Form</h2>
          <ListingForm />
        </section>
      </div>
    </main>
  );
};

export default NewListing;
