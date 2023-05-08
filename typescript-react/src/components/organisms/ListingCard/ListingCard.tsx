import { FC } from 'react';

import styles from './listing-card.module.scss';

import { create } from '@/common/createBem';
import { formatter as formatCurrency } from '@/common/currencyFormatter';
import { formatter as formatDate } from '@/common/dateFormatter';
import { Listing } from '@/types/listing';

const bem = create(styles, 'listing-card');

type ListingCardProps = {
  listing: Listing;
  onRedirect?: (value: number) => void;
};

const ListingCard: FC<ListingCardProps> = ({ listing, onRedirect }) => (
  <article className={bem()}>
    <span className={bem('price')}>
      {formatCurrency.format(listing.latest_price_eur ?? 0)}
    </span>

    <ul className={bem('properties')}>
      <li className={bem('properties-item')}>{listing.building_type}</li>
      <li data-testid="surface_area_m2" className={bem('properties-item')}>
        {listing.surface_area_m2}m<sup>2</sup>
      </li>
      <li className={bem('properties-item')}>{listing.rooms_count} rooms</li>
    </ul>

    <section className={bem('address')}>
      <address data-testid="street_address">
        {listing.postal_address?.street_address},{' '}
        {listing.postal_address?.postal_code}, {listing.postal_address?.city}
      </address>
    </section>

    <section>
      <div>
        <strong>Contact Person:</strong>{' '}
        <span data-testid="name">{listing.name}</span>
      </div>
      <div>
        <strong>Phone Number:</strong>{' '}
        <span data-testid="contact_phone_number">
          {listing.contact_phone_number}
        </span>
      </div>
    </section>

    <section className={bem('description')}>
      <h3>Property description: </h3>
      <p data-testid="description">{listing.description}</p>
    </section>

    <div className={bem('footer')}>
      <p className={bem('reference')}>
        Ref: 123456 <br />
        Last update: {formatDate(new Date(listing.updated_date))}
      </p>

      {!!onRedirect && (
        <button
          aria-label="submit"
          className={bem('link')}
          onClick={() => onRedirect(listing.id)}
        >
          See history &rarr;
        </button>
      )}
    </div>
  </article>
);

export default ListingCard;
