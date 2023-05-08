import Listings from '@containers/Listings/Listings';
import NewListing from '@containers/NewListing/NewListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PricesHistory from './containers/PricesHistory';

import Header from '@/components/molecules/Header/Header';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewListing />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id/prices" element={<PricesHistory />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
