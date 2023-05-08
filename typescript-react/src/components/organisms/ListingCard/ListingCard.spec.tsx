import { render, screen } from '@testing-library/react';

import ListingCard from './ListingCard';

describe('<ListingCard /> test suite', () => {
  it('Should render the <ListingCard /> component', () => {
    const listing = {
      bedrooms_count: 0,
      building_type: 'STUDIO',
      contact_phone_number: '+4804230482303',
      description:
        'This is a beautiful apartment in the vicinity of a prime location',
      id: 12,
      latest_price_eur: 1000000.0,
      name: 'Ralph Lauren',
      postal_address: {
        city: 'Munchen',
        country: 'DE',
        postal_code: '81249',
        street_address: 'Henschelstra\u00dfe 21',
      },
      rooms_count: 2,
      surface_area_m2: 100.0,
      updated_date: '2023-05-08T15:30:08.112763',
    };

    render(<ListingCard listing={listing} />);

    const name = screen.getByTestId('name');
    const description = screen.getByTestId('description');
    const phoneNumber = screen.getByTestId('contact_phone_number');

    expect(name).toHaveTextContent(listing.name);
    expect(description).toHaveTextContent(listing.description);
    expect(phoneNumber).toHaveTextContent(listing.contact_phone_number);
  });
});
