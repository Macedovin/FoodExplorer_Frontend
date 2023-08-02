import { Routes, Route } from 'react-router-dom';

import { UsersLayout } from '../Layout/UsersLayout';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { CheckOut } from '../pages/CheckOut';
import { OrderHistory } from '../pages/OrderHistory';
import { DishDetails } from '../pages/DishDetails';
import { Profile } from '../pages/Profile';
import { NotFoundApp } from '../pages/NotFound/NotFoundApp';

export function UserRoutes() {
  return(
    <Routes>
      <Route path='/' element={<UsersLayout />} > 
        <Route index element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/check_out' element={<CheckOut />} />
        <Route path='/order_history' element={<OrderHistory />} />
        <Route path='/dish_details/:id' element={<DishDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFoundApp />}/>
      </Route>
    </Routes>
  )
} 