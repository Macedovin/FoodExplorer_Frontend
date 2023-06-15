import { Routes, Route } from 'react-router-dom';

import { Layouts } from '../components/Layouts';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';
import { OrderHistory } from '../pages/OrderHistory';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Layouts />}>
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order_history' element={<OrderHistory />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
} 