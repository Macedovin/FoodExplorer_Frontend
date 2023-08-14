import { Container, Order, Empty, Payment } from './styles';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { useCart } from '../../hooks/cart';

import { Toast } from '../../Toast';

import { Loading } from '../../components/Loading';
import { TurnBackButton } from '../../components/TurnBackButton';
import { RemoveItemCard } from '../../components/RemoveItemCard';
import { Button } from '../../components/Button';

import { formatCurrency } from '../../utilities/formatCurrency';

import { ReactComponent as EmptyCart } from '../../assets/icons/shopping_cart.svg';

export function CheckOut() {
  
  const { cartDishes, removeFromCart, getCartQuantity, emptyCart } = useCart();
  
  const [dishesInCart, setDishesInCart] = useState([]);
  
  const [showLoading, setShowLoading] = useState(false);
  
  const navigate = useNavigate();

  function handleRemoveDish(deleted) {

    setDishesInCart(prevState => prevState.filter(dish => dish !== deleted));

    removeFromCart(deleted.id, deleted.data.name);

    if (getCartQuantity === 0) {
      emptyCart();
    }
  }

  async function handleOrder() {
    
    const formattedOrder = dishesInCart.map(item => {
      return {
        dish_id: item.id,
        quantity: item.quantity
      }
    });
    
    try {
      await api.post('/orders', formattedOrder);

      setDishesInCart([]);
      emptyCart();
      
      Toast().handleSuccess('Pedido indo pro forno! Obrigado pela preferência!!!');
      
      navigate('/');

    } catch(error) {
      if (error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleDefault('Infelizmente, no momento, não foi possível finalizar o pedido. Volte mais tarde.');
      }
    }
    console.log(dishesInCart, '->', formattedOrder, 'Vou finalizar...')

  }

  useEffect(() => {

    setShowLoading(true);

    async function fetchDishes() {
      
      try {
        const response = await api.get('/dishes');
        
        const categories = response.data;

        const mapCategories = categories.map(category => {
          return category.dishes;
        });
        
        const allDishes = Object.values(mapCategories)
        .filter((x) => Array.isArray(x))
        .flat();

        const dishesWithQuantity = cartDishes.map(item => {
          
          const allDishesInApp = allDishes.filter(dish => dish.id === item.id);

          for(var key in allDishesInApp) {
            return {  
              ...item,
              data: allDishesInApp[key]
            }
          }
        });

        setDishesInCart(dishesWithQuantity);

      } catch(error) {
        if (error.response) {
          Toast().handleError(error.response.data.message);
        } else {
          Toast().handleError('Infelizmente, não foi possível carregar os dados. Volte mais tarde!');
        }
      } 

      setShowLoading(false);
    }

    fetchDishes();
  }, []);

  return (
    <Container>

      {showLoading && <Loading /> }

      <TurnBackButton />
      
      <div className='inner-container' >
        <Order>
          <h2>
            Meu pedido
          </h2>

          {dishesInCart && !!dishesInCart.length

            ?
              <>          
                <section
                  className='order-cards'
                >
                  {dishesInCart.map(dish => {
                    const { id, quantity, data } = dish;

                    return (
                      
                      <RemoveItemCard
                        key={String(id)} 
                        dish={
                          {
                            picture: data.picture,
                            quantity: quantity,
                            name: data.name,
                            price: data.price * quantity
                          }
                        }
                        title='Excluir'
                        onClick={() => handleRemoveDish(dish)}
                      />

                    )
                  })}
                  <footer>
                    <h3>
                      Total: {formatCurrency(dishesInCart.reduce((total, dish) => total + dish.quantity * dish.data.price, 0))}
                    </h3>

                    <Button 
                      className='finish'
                      title='Finalizar pedido'
                      onClick={handleOrder}
                    />
                  </footer>
                </section>
              </>
            :
              <Empty>
                <h4>
                  Ainda não foram inseridos pratos ao carrinho de compras!
                </h4>

                <EmptyCart />
                <p>Carrinho vazio</p>
              </Empty>      
          }
        </Order>
        
        <Payment>
          <h1>
            Acesso as opções de pagamento e/ ou entrega
          </h1>
        </Payment>
      </div>

    </Container>
  );
}