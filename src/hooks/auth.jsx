import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

import { Toast } from '../Toast';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});

  const [showLoading, setShowLoading] = useState(false);

  async function signIn({ email, password }) {

    setShowLoading(true);
    console.log(email, password)

    try {
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;
      
      setData({ user, token });

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      console.log(user, token);

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);

    } catch(error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Não foi possível entrar')
      }
    }

    setShowLoading(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token');

    const user = localStorage.getItem('@foodexplorer:user');

    if(token && user) {

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return (
    <AuthContext.Provider value={{
      showLoading,
      setShowLoading,   
      signIn,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }