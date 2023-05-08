import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ListingForm from './ListingForm';

test('rendering and submitting a basic Formik form', async () => {
  const listing = {
    bedrooms_count: 0,
    building_type: 'STUDIO',
    contact_phone_number: '+4804230482303',
    description:
      'This is a beautiful apartment in the vicinity of a prime location',
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
  };

  const handleSubmit = jest.fn();
  render(<ListingForm onSubmit={handleSubmit} />);
  const user = userEvent.setup();

  await act(async () => {
    await user.type(
      screen.getByRole('textbox', { name: /name/i }),
      listing.name,
    );
    await user.type(
      screen.getByRole('textbox', { name: 'description' }),
      listing.description,
    );
    await user.type(
      screen.getByRole('textbox', { name: 'postal_address.street_address' }),
      listing.postal_address.street_address,
    );
    await user.type(
      screen.getByRole('textbox', { name: 'postal_address.postal_code' }),
      listing.postal_address.postal_code,
    );
    await user.type(
      screen.getByRole('textbox', { name: 'postal_address.city' }),
      listing.postal_address.city,
    );
    await user.type(
      screen.getByRole('textbox', { name: 'postal_address.country' }),
      listing.postal_address.country,
    );
    await user.type(
      screen.getByRole('spinbutton', { name: 'latest_price_eur' }),
      String(listing.latest_price_eur),
    );
    await user.type(
      screen.getByRole('spinbutton', { name: 'surface_area_m2' }),
      String(listing.surface_area_m2),
    );
    await user.type(
      screen.getByRole('spinbutton', { name: 'rooms_count' }),
      String(listing.rooms_count),
    );
    await user.type(
      screen.getByRole('textbox', { name: 'contact_phone_number' }),
      listing.contact_phone_number,
    );
    await user.click(screen.getByRole('button', { name: /Create/i }));
    await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(listing));
  });
});
