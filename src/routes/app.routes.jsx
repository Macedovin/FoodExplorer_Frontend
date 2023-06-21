import { Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';
import { OrderHistory } from '../pages/OrderHistory';
import { DishDetails } from '../pages/DishDetails';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order_history' element={<OrderHistory />} />
        <Route path='/dish_details/1' element={<DishDetails />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
} 