import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { AuthRoutes } from './auth.routes';
import { UsersRoutes } from './users.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <UsersRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}