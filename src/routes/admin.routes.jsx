import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AdminLayout } from '../Layout/AdminLayout';
import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { DishDetails } from '../pages/DishDetails';
import { AllUsers } from '../pages/AllUsers';
import { Orders } from '../pages/Orders';
import { Profile } from '../pages/Profile';
import { NotFoundApp } from '../pages/NotFound/NotFoundApp';

export function AdminRoutes() {

  const hasPermission = true;


  return(
    <Routes>
      <Route path='/' element={<AdminLayout />} >
        <Route index element={<Home />} />  
        <Route path='/new_dish' element={<NewDish />}/>
        <Route path='/edit_dish/:id' element={<EditDish />}/>
        <Route path='/dish_details/:id' element={<DishDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orders_history' element={<Orders />}/>
        <Route path='/users_list' element={<AllUsers />}/>
        <Route path='*' element={<NotFoundApp />}/>
      </Route>
    </Routes> 
  )
}
 