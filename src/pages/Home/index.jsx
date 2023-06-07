import { Container } from './styles';


import { Mobile_wrapper } from '../../components/Mobile_wrapper';
import { Header } from '../../components/Header';
import { FoodSection } from '../../components/FoodSection';
import{ FoodCard } from '../../components/FoodCard';
import { Footer } from '../../components/Footer'; 
 
export function Home() {

  return (
    <Mobile_wrapper>
      <Container>
        <Header />
        <main>

          <FoodSection title='Refeições'>        
            <FoodCard 
              data={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
            />
            <FoodCard 
              data={
                {
                  name: 'Camarão 2',
                  description: 'Mais camarão com muito mais coisas junto.',
                  price: 'R$ 28,94'
                }
              }
            />    
                        <FoodCard 
              data={
                {
                  name: 'Camarão 2',
                  description: 'Mais camarão com muito mais coisas junto.',
                  price: 'R$ 28,94'
                }
              }
            /> 
                        <FoodCard 
              data={
                {
                  name: 'Camarão 2',
                  description: 'Mais camarão com muito mais coisas junto.',
                  price: 'R$ 28,94'
                }
              }
            />         
          </FoodSection>
          <FoodSection title='Bebidas'>        
            <FoodCard 
              data={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
            />
            <FoodCard 
              data={
                {
                  name: 'Camarão 2',
                  description: 'Mais camarão com muito mais coisas junto.',
                  price: 'R$ 28,94'
                }
              }
            />        
          </FoodSection>
          <FoodSection title='Sobremesas'>       
            <FoodCard 
              data={
                {
                  name: 'Camarão',
                  description: 'Camarão com mais coisas.',
                  price: 'R$ 25,97'
                }
              }
            />
            <FoodCard 
              data={
                {
                  name: 'Camarão 2',
                  description: 'Mais camarão com muito mais coisas junto.',
                  price: 'R$ 28,94'
                }
              }
            />        
          </FoodSection>
        </main>
        <Footer />
      </Container>
    </Mobile_wrapper>
  );
}