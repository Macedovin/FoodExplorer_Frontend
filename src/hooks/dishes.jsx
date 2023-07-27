/* import { createContext, useContext, useState, useEffect } from 'react';

export const DishesContext = createContext({});

import { api } from '../services/api';

import { Toast } from '../Toast';

function DishesProvider({ children }) {
  const [newCategoryData, setNewCategoryData] = useState({});

  async function fetchNewCategory({ name }) {
    console.log('Estou no Hook');
    
    try {

      const response = await api.post('/dish_categories', { name }); 

      const { category } = response.data;
      
      setNewCategoryData(category);

      console.log('"Hook"', response.data,';', newCategoryData, '->', category);
    
    } catch(error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Algo deu errado. Verifique a categoria.');
      }
    }
    
    console.log('"Hook 2"', newCategoryData);
  }

  useEffect(() => {

  }, [])

  return (
    <DishesContext.Provider value={{
      fetchNewCategory,
      category: newCategoryData
    }}>
      {children}
    </DishesContext.Provider>
  );
}

function useDishes() {
  const context = useContext(DishesContext);

  return context;
}

export { DishesProvider, useDishes } */