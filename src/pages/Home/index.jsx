import { Container } from './styles';

import { useState, useEffect } from 'react';

import { api } from '../../services/api'; 

import categories from '../../mock.json';

//import { Mobile_wrapper } from '../../components/Mobile_wrapper';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';  
import { FoodSection } from '../../components/FoodSection';
import{ FoodCard } from '../../components/FoodCard';
import { Footer } from '../../components/Footer';

import { useSearchData } from '../../hooks/searchData'; 
 
export function Home({ card }) {
  const [search, setSearch] = useState('');
  const [ingredients, setIngredients] = useState([]);
  //const [categories, setCategories] = useState([]);

  const searchDataResult = useSearchData(); 

  console.log(searchDataResult);

  useEffect(() => {
    async function fetchDishes() {
      const response = api.get(`/dishes?name=?${search}&ingredients${ingredients}`);

      console.log(response.data);

      setCategories(response.data);
    }

    //fetchDishes();
  },[]);

  return (
/*     <Mobile_wrapper> */
      /* <Container> */
        /* <Header /> */
        <Container>
          <Banner />

          {
            categories &&

            categories.map(category =>(
              <FoodSection 
                key={String(category.category_id)}
                title={category.category_name}
              >
                {category.dishes.map(dish => (

                  <FoodCard
                    key={String(dish.id)}
                    to={`/dish_details/${dish.id}`}
                    dish={
                      {
                        name: dish.name,
                        description: dish.description,
                        price: dish.price,
                      }
                    }
                    button={
                      {title: 'incluir'}
                    }
                  />
                ))
                }
              </FoodSection>                            
            ))
          }
{/*           <FoodSection title='Refeições'>
            <FoodCard
              to={`/dish_details/${1}`} 
              dish={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97',
                }
              }
              button={
                {title: 'incluir'}
              }
            />
            <FoodCard
              to={`/dish_details/${1}`} 
              dish={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
              button={
                {title: 'incluir'}
              }
            />
            <FoodCard 
              to={`/dish_details/${1}`}
              dish={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
              button={
                {title: 'incluir'}
              }
            />
            <FoodCard   
              to={`/dish_details/${1}`}
              dish={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
              button={
                {title: 'incluir'}
              }
            />
          </FoodSection>
          <FoodSection title='Bebidas'>
            <FoodCard
              to={`/dish_details/${1}`} 
              dish={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
              button={
                {title: 'incluir'}
              }
            />
          </FoodSection> */}
 
        </Container>
        /* <Footer /> */
      /* </Container> */
/*     </Mobile_wrapper> */
  );
}