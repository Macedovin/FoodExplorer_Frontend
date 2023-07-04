import { Routes, Route } from 'react-router-dom';

import { UsersLayout } from '../Layout/UsersLayout';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Orders } from '../pages/Orders';
import { OrderHistory } from '../pages/OrderHistory';
import { DishDetails } from '../pages/DishDetails';
import { Profile } from '../pages/Profile';
import { NotFound } from '../pages/NotFound';

export function UserRoutes() {
  return(
    <Routes>
      <Route path='/' element={<UsersLayout role='ROLE_ADMIN'/>}  > 
        <Route index element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order_history' element={<OrderHistory />} />
        <Route path='/dish_details/1' element={<DishDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  )
} 