import { Routes, Route } from 'react-router-dom';

import { AuthLayout } from '../Layout/AuthLayouts'
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  return( 
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route path="/" element={<SignIn />}/>
        <Route path="/register" element={<SignUp />}/>
      </Route>
    </Routes>
  )
}