import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { UsersLayout } from '../Layout/UsersLayout';
import { AdminPage } from '../pages/AdminPage';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {

  const hasPermission = true;


  return(
    <Routes>
       <Route path='/' element={<AdminPage />}/>
       <Route path='*' element={<NotFound />}/>
    </Routes> 
  )
}
 