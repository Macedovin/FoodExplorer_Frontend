import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './auth.routes';
import { UsersRoutes } from './users.routes';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}