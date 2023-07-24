import { Routes, Route } from 'react-router-dom';

import { AuthLayout } from '../Layout/AuthLayouts'
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { NotFoundAuth } from '../pages/NotFound/NotFoundAuth';  

export function AuthRoutes() {
  return( 
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        <Route path="/" element={<SignIn />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path='*' element={<NotFoundAuth />}/>
      </Route>
    </Routes>
  )
}