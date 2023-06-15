import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';
import { OrderHistory } from '../pages/OrderHistory';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/order_history' element={<OrderHistory />} />
    </Routes>
  )
} 