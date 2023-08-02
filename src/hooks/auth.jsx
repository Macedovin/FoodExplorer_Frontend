import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

import { Toast } from '../Toast';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [userData, setUserData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const [showLoading, setShowLoading] = useState(false);

  async function signIn({ email, password }) {

    setShowLoading(true);
    
    try {
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;
      
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUserData({ user, token });

    } catch(error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Não foi possível entrar.')
      }
    }
    
    setShowLoading(false);
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:token');
    localStorage.removeItem('@foodexplorer:user');
    
    setIsAdmin(false);
    setUserData({});

  }

  async function updateUserProfile({ user, avatarFile }) {
    try {

      if (avatarFile ) {

        const fileUploadForm = new FormData();

        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);

        user.avatar = response.data.avatar; 
      }

      const response = await api.put('/users', user);

      user = response.data.updatedUser;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));

      setUserData({ user, token: userData.token });

      Toast().handleSuccess('Perfil atualizado com sucesso.');

    } catch(error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Não foi possível atualizar o perfil.')
      }
    }
  }

  useEffect(() => {

    const token = localStorage.getItem('@foodexplorer:token');
    const user = localStorage.getItem('@foodexplorer:user');

    if(user && token) {

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUserData({
        token,
        user: JSON.parse(user)
      });
    }
  },[]);

  useEffect(() => {

    async function loadRoles() {

      try{

        const response = await api.get('/users/roles');
  
        const roles = response.data;

        const findRole = roles.includes('ROLE_ADMIN');

        if(!findRole) {

          setIsAdmin(false);

        } else {

          setIsAdmin(true);
        }

        setIsAdmin(findRole);
                
      } catch(error) {
        if(error.response)
        console.error(error.response.data.message);
      }
    }

    loadRoles();

  }, [userData.token]);

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token');
    const user = localStorage.getItem('@foodexplorer:user');

    if(user && token) {
      const parseJwt = JSON.parse(atob(token.split('.')[1]));

      const { exp } = parseJwt;

      if(exp * 1000 < Date.now()) {
        return signOut();
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      showLoading,
      setShowLoading, 
      user: userData.user,
      isAdmin,
      signIn,
      signOut,
      updateUserProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }