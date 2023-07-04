import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from '../routes/auth.routes';
import { UserRoutes } from '../routes/user.routes';
import { AdminRoutes } from '../routes/admin.routes'

export function Routes({ role }) {

  const { user, isAdmin } = useAuth();

  const checkAdmin = user && isAdmin;

  const checkUser = user && !isAdmin;
  
  console.log(typeof user, ':', user);
  //console.log('routes:', isAdmin);

  function renderRoutes() {
    if(!user) {
      return <AuthRoutes />
    } 

    if(user && !isAdmin) {
      return <UserRoutes />
    }  

    if(user && isAdmin) {
      return <AdminRoutes />
    }
  }

  return <BrowserRouter>{renderRoutes()}</BrowserRouter>;
  
}