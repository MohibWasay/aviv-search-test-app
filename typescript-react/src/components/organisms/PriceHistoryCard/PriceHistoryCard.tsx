import { FC } from 'react';

import styles from './price-history-card.module.scss';

import { formatter as formatCurrency } from '@/common/currencyFormatter';
import { formatter as formatDate } from '@/common/dateFormatter';
import { PriceHistoryItem } from '@/types/listing';

type Props = { priceHistory?: PriceHistoryItem[] };

const PriceHistoryCard: FC<Props> = ({ priceHistory }) => (
  <div className={styles['container']}>
    <table className={styles['price-card']}>
      <tbody>
        <tr className={styles['price-card__header']}>
          <th scope="col">Date</th>
          <th scope="col">Price (eur)</th>
        </tr>

        {priceHistory?.map((item, index) => (
          <tr key={String(index)}>
            <td>{formatDate(new Date(item.created_date))}</td>
            <td>{formatCurrency.format(item.price_eur)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default PriceHistoryCard;
