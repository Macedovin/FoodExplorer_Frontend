import { Container, FirstContact, Action } from './styles';

import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useSearchData } from '../../hooks/searchData';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api'; 

//import categories from '../../categories_mock.json';
import favorites from '../../favorites_mock.json';

import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';  
import { FoodSection } from '../../components/FoodSection';
import{ FoodCard } from '../../components/FoodCard';
import { Footer } from '../../components/Footer'; 
import { Button } from '../../components/Button';
 

export function Home() {
  const { search } = useSearchData();
  const { isAdmin } = useAuth();

  const navigate = useNavigate();

  const [showLoading, setShowLoading] = useState(false);

  const [allCategories, setAllCategories] = useState([]);

  function handleDishRedirect() {
    navigate('/new_dish');
  }

  function handleProfileRedirect() {
    navigate('/profile');
  }

  useEffect(() => {
    console.log(search);

    async function fetchDishes() {
      setShowLoading(true);
      
      try{

        const response = await api.get(`/dishes?search=${search}`);
        
        const categories = response.data  

        setAllCategories(categories);
        
      } catch (error) {
        if (error.response) {
          console.error(error.response.data.message);
        } else {
          console.error('Algo deu errado ao buscar os pratos');
        }
      }

      setShowLoading(false);
    }    

    console.log(allCategories);

    fetchDishes();
    
  },[search]);

  useEffect(() => {

  }, [])

  return (
/*     <Mobile_wrapper> */
      /* <Container> */
        /* <Header /> */
        <Container>
          <Banner />

          {
            allCategories && !!allCategories.length 
            
              ? 
                allCategories.map(category => {

                  if (category.dishes.length > 0) {
                    return (
                      
                      <FoodSection 
                        key={String(category.category_id)}
                        title={category.category_name}
                      >
                        {category.dishes.map(dish => (
                          
                          <FoodCard.Root
                            key={String(dish.id)}
                            isLink
                            to={`/dish_details/${dish.id}`}
                          >
                            <FoodCard.TopCard 
                              dish={
                                {id: dish.id}
                              }
                            />
                            <FoodCard.Picture 
                              dish={
                                {
                                  picture: dish.picture,
                                  name: dish.name
                                }
                              }
                            />
                            <FoodCard.FoodInfos 
                              dish={
                                {
                                  name: dish.name,
                                  description: dish.description,
                                  price: dish.price,
                                }
                              }
                            />
                            <FoodCard.OrderInfos 
                              button={
                                {title: 'incluir'}
                              }
                              id={dish.id}
                            />
                          </FoodCard.Root>
    
                        ))}
  
                      </FoodSection>      
                    )
                  }
  
                  return null
                })          
              :               
                <>                
                  {showLoading && <Loading />}

                  <FirstContact>
                    <h2>
                      Seja bem-vindo!!!
                    </h2>
                    <h3>
                      Infelizmente ainda não temos nenhuma delícia cadastrada!
                    </h3>
                    <Action>
                      {
                        isAdmin
                          ?
                            <>
                              <p>
                                Conheça a aplicação e/ ou faça o cadastro do primeiro prato! 
                              </p>  
                              <Button 
                                title='Cadastrar novo prato'
                                onClick={handleDishRedirect}
                              />
                            </> 
                          : 
                            <>
                            
                              <p>
                                Aproveite, adicione uma imagem ao seu perfil e volte mais tarde! 
                              </p>
                              <Button 
                                title='Ver perfil'
                                onClick={handleProfileRedirect}
                              />  
                            </>
                      }
                    </Action>
                  </FirstContact>
                </>

          }
        </Container>
        /* <Footer /> */
      /* </Container> */
/*     </Mobile_wrapper> */
  );
}