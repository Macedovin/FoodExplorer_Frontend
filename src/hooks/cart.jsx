import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  function getItemQuantity(id) {

    cartItems.find(item => item.id === id)?.quantity || 0

/*     if(quantity === undefined) {
      return 0;
    }
    
    return quantity; */
  }

  function increaseOneToCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      setCartItems(
        [
          ...cartItems,
          {id: id, quantity: 1}
        ]
      )
    } else {
      setCartItems(
        cartItems.map(item => {
          item.id === id ? {...item, quantity: item.quantity + 1} : item
        })
      )
    }
  } 

  function removeFromCart(id) {
    setCartItems(cartItems => cartItems.filter(currentItem => {
        return currentItem.id != id
      })
    )
  }
  
  function removeOneFromCart(id) {
    const quantity = getItemQuantity(id);

    if(quantity === 1) {
      removeFromCart(id);
    } else {
      setCartItems(
        cartItems.map(item => {
          item.id === id ? {...item, quantity: item.quantity - 1} : item
        })
      )
    }
  }


  return (
    <CartContext.Provider value={{
      cartItems,
      getItemQuantity,
      increaseOneToCart,
      removeFromCart,
      removeOneFromCart
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