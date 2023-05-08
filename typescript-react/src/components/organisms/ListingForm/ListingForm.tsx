import { FC } from 'react';
import { getIn } from 'formik';

import styles from './listing-form.module.scss';

import { create } from '@/common/createBem';
import { Input } from '@/components/atoms/Input';
import { Select } from '@/components/atoms/Select/Select';
import { useListingForm } from '@/hooks/useListingForm';
import { ListingData } from '@/types/listing';

const bem = create(styles, 'ListingForm');

type ListingFormProps = {
  onSubmit: (values: ListingData) => Promise<void>;
};

const ListingForm: FC<ListingFormProps> = ({ onSubmit }) => {
  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useListingForm({ onSubmit });

  return (
    <form className={bem()} onSubmit={handleSubmit}>
      <div className={bem('input-group')}>
        <Input
          type="text"
          name="name"
          label="Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          errorMessage={touched.name && errors.name}
          description="A user friendly name for the listing	"
        />
        <Input
          type="text"
          name="description"
          label="Description"
          onChange={handleChange}
          errorMessage={touched.description && errors.description}
          value={values.description}
          description="A user friendly description for the listing"
        />
      </div>

      <div className={bem('input-group')}>
        <Input
          name="postal_address.street_address"
          type="text"
          value={values.postal_address?.street_address}
          errorMessage={
            getIn(touched, 'postal_address.street_address') &&
            getIn(errors, 'postal_address.street_address')
          }
          onChange={handleChange}
          label="Street address:"
          description="The street address of the postal address.	"
        />
      </div>

      <div className={bem('input-group')}>
        <Input
          name="postal_address.postal_code"
          type="text"
          onChange={handleChange}
          value={values.postal_address?.postal_code}
          errorMessage={
            getIn(touched, 'postal_address.postal_code') &&
            getIn(errors, 'postal_address.postal_code')
          }
          label="Postal Code:"
          description="The postal code of the postal address."
        />
        <Input
          name="postal_address.city"
          type="text"
          onChange={handleChange}
          value={values.postal_address?.city}
          errorMessage={
            getIn(touched, 'postal_address.city') &&
            getIn(errors, 'postal_address.city')
          }
          label="City"
          description="The city of the postal address."
        />
        <Input
          name="postal_address.country"
          type="text"
          onChange={handleChange}
          value={values.postal_address?.country}
          errorMessage={
            getIn(touched, 'postal_address.country') &&
            getIn(errors, 'postal_address.country')
          }
          label="Country"
          description="The country of the Postal Address, as a ISO 3166-1 alpha-2 country code."
        />
      </div>

      <div className={bem('input-group')}>
        <Select
          label="Building Type"
          onChange={handleChange}
          name="building_type"
          errorMessage={touched.building_type && errors.building_type}
          value={values.building_type}
          description="The type of building the listing referers to"
          options={[
            { value: 'STUDIO', label: 'Studio' },
            { value: 'APARTMENT', label: 'Apartment' },
            { value: 'HOUSE', label: 'House' },
          ]}
        />

        <Input
          name="latest_price_eur"
          type="number"
          errorMessage={touched.latest_price_eur && errors.latest_price_eur}
          onChange={handleChange}
          value={values.latest_price_eur}
          label="Latest Price"
          description="The price of the listing, in euros.	"
        />

        <Input
          name="surface_area_m2"
          type="number"
          label={
            <span>
              Surface Area (m<sup>2</sup>)
            </span>
          }
          onChange={handleChange}
          errorMessage={touched.surface_area_m2 && errors.surface_area_m2}
          value={values.surface_area_m2}
          description="The surface of the listing, in square meters.	"
        />

        <Input
          name="rooms_count"
          type="number"
          label="Number of Rooms"
          onChange={handleChange}
          errorMessage={touched.surface_area_m2 && errors.rooms_count}
          value={values.rooms_count}
          description="The number of rooms of the listing.	"
        />
      </div>

      <div className={bem('input-group')}>
        <Input
          name="contact_phone_number"
          data-testid="contact_phone_number"
          type="text"
          onChange={handleChange}
          errorMessage={
            touched.contact_phone_number && errors.contact_phone_number
          }
          value={values.contact_phone_number}
          label="Phone Number"
          description="Listing main contact phone number, following the E.164 standard. Match patten : ^\+[1-9]\d{1,14}$"
        />
      </div>

      <button type="submit" className={bem('button', { submit: true })}>
        Create
      </button>
    </form>
  );
};

export default ListingForm;
