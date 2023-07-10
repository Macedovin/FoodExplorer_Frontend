import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AdminLayout } from '../Layout/AdminLayout';
import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { DishDetails } from '../pages/DishDetails';
import { Profile } from '../pages/Profile';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {

  const hasPermission = true;


  return(
    <Routes>
      <Route path='/' element={<AdminLayout />} >
        <Route index element={<Home />} />  
        <Route path='/new_dish' element={<NewDish />}/>
        <Route path='/edit_dish/:1' element={<EditDish />}/>
        <Route path='/dish_details/1' element={<DishDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes> 
  )
}
 