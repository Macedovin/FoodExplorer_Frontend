import { Routes, Route } from 'react-router-dom';

//import { UsersLayout } from '../Layout/UsersLayout';
import { AdminPage } from '../pages/AdminPage';

export function AdminRoutes() {
  return(
    <Routes>
      <Route path='/admin' element={<AdminPage />}/>
    </Routes>
  )
}
 