import { render, screen } from '@testing-library/react';

import PriceHistoryCard from './PriceHistoryCard';

import { formatter as currency } from '@/common/currencyFormatter';
import { formatter as date } from '@/common/dateFormatter';

test('rendering and submitting a basic Formik form', async () => {
  const priceHistory = [
    {
      created_date: '1970-03-01T00:00:00.000Z',
      price_eur: 340000,
    },
    {
      created_date: '1970-02-01T00:00:00.000Z',
      price_eur: 320000,
    },
    {
      created_date: '1970-01-01T00:00:00.000Z',
      price_eur: 300000,
    },
  ];
  render(<PriceHistoryCard priceHistory={priceHistory} />);

  expect(screen.getAllByRole('row')[1]?.textContent).toContain(
    date(new Date(priceHistory[0].created_date)),
  );
  expect(screen.getAllByRole('row')[1]?.textContent).toContain(
    currency.format(priceHistory[0].price_eur),
  );
});
