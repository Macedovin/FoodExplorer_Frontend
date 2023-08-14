import { createContext, useContext, useState, useEffect } from 'react';
import { Toast } from '../Toast';

export const CartContext = createContext({});

function CartProvider({ children }) {

  const [cartDishes, setCartDishes] = useState([]);

  const getCartQuantity = cartDishes.reduce((quantity, dish) => dish.quantity + quantity, 0);

  function handleAddToCart(id, quantity) {  

    const dishAlreadyAdded = cartDishes.find(dish => dish.id === id);

    const newDish = { id, quantity };

    if(!dishAlreadyAdded) {
      
      setCartDishes(prevState => [...prevState, newDish]);
      
      localStorage.setItem('@foodexplorer:shoppingCart', JSON.stringify([newDish, ...cartDishes]));
      
      Toast().handleSuccess('Prato(s) adicionado(s) ao carrinho com sucesso!');
    } else {
      let updatedQuantity = dishAlreadyAdded.quantity + quantity;
      let limitedQuantityReached;

      if(updatedQuantity >= 10) {
        updatedQuantity = 10;
        limitedQuantityReached = true;

        Toast().handleInfo('Máximo de 10 unidades por prato.');
      }

      const newDishUpdated = {
        ...newDish,
        quantity: updatedQuantity
      };

      const dishesInCartFiltered = cartDishes.filter(dish => dish.id !== id)

      setCartDishes([newDishUpdated, ...dishesInCartFiltered]);
    
      localStorage.setItem('@foodexplorer:shoppingCart', JSON.stringify([newDishUpdated, ...dishesInCartFiltered]));
      
      if(!limitedQuantityReached) {
        Toast().handleSuccess('Prato(s) adicionado(s) com sucesso!');
      }
    }
  } 

  function removeFromCart(id, name) {
    console.log(cartDishes);
    const filteredCartDishes = cartDishes.filter(dish => dish.id !== id);
    
    Toast().handleInfo(`Prato "${name}" removido do carrinho.`);

    setCartDishes(filteredCartDishes)
    
    console.log(filteredCartDishes);

    localStorage.setItem('@foodexplorer:shoppingCart', JSON.stringify(filteredCartDishes));
  }

  function emptyCart() {

    setCartDishes([]);
    localStorage.removeItem('@foodexplorer:shoppingCart');

  }

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('@foodexplorer:shoppingCart'));
    
    if (cartItems) {
      setCartDishes(cartItems);
    } else {
      setCartDishes([]);
    }

  }, [])

  return (
    <CartContext.Provider value={{
      cartDishes,
      getCartQuantity,
      handleAddToCart,
      removeFromCart,
      emptyCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart }