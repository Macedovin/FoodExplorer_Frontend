import { Container, Form, Picture, IngredientsSection } from './styles';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { numberFromCurrency } from '../../utilities/formatCurrency';

import { api } from '../../services/api';

import { Toast } from '../../Toast';

import { TurnBackButton } from '../../components/TurnBackButton';
import { Input } from '../../components/Input';  
import { Select } from '../../components/Select';
import { IngredientsTag } from '../../components/IngredientsTag';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

import { ReactComponent as Upload } from '../../assets/icons/UploadSimple.svg';
import { toast } from 'react-toastify';

export function NewDish() {
  
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);
  
  const [dishName, setDishName] = useState('');
  
  /* -------------- Select logic data --------------- */

  const [categoryID, setCategoryID] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const [selectValue, setSelectValue] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  const [isSelectInputShown, setIsSelectInputShown] = useState(false);
  const [isSelectShown, setIsSelectShown] = useState(true);

  function handleSelectInput(event) {
    setIsSelectInputShown(prevState => !prevState);
    setIsSelectShown(prevState => !prevState);
  }

  /* -------------- Select logic data --------------- */
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [data, setData] = useState({});

  function handleAddIngredients() {
    
    const ingredientAlreadyAdded = ingredients.includes(newIngredient);

    if(ingredientAlreadyAdded) {
      return Toast().handleWarning('O ingrediente digitado já foi adicionado.');
    }

    if(newIngredient === '') {
      return Toast().handleWarning('Nada foi digitado. O campo esta em branco.');
    }

    if(newIngredient !== '') {
      setIngredients(prevState => [...prevState, newIngredient.trim()]);

      setNewIngredient('');

    }

    console.log(ingredients, '->', newIngredient)
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handleSelectedOption(option) {

    if(!option) {
      console.log('Estou vazio')
    }
    
    setCategoryID(option.value);
    
    console.log(option, categoryID, 'Fui clicado na pagina')
  }

  function handleCategoryName() {
    console.log(newCategory)
  }

  async function handleNewDish(event) {
    event.preventDefault()

    console.log(typeof price); // passar como number

    if (newCategory && selectValue) {
      
      console.log(newCategory, selectValue);

      return Toast().handleWarning('O prato esta recebendo 2 (duas) CATEGORIAS. Verifique.')
    } 
    
    if (newCategory && !selectValue) {

      console.log('Nova categoria vai ser criada')
      try {

        const response = await api.post('/dish_categories', { name: newCategory }); 
  
        const { category } = response.data;
        
        console.log('"113"', category.id);

        //setCategoryID(category.id);
      
      } catch(error) {
        if(error.response) {
          Toast().handleError(error.response.data.message);
        } else {
          Toast().handleError('Algo deu errado. Verifique a categoria.');
        }
      }
      return category
    }

    console.log('NC ->', newCategory, 'SV', selectValue, 'ID ->', categoryID);
    



    /* ---------- INGREDIENTS ------------------- */

    if (newIngredient) {
      return Toast().handleWarning('Ingrediente digitado, mas não adicionado. Verifique.')
    }   


    console.log({dishName, description, price, categoryID, ingredients});

    /*     await api.post('/dishes', {
          name,
          description,
          price,
          category_id,
          ingredients
        }); */
  }

  useEffect(() => {
    async function fetchDishCategories() {
      const response = await api.get('/dish_categories');
      
      const categories = response.data;      

      const fetchedCategories = categories?.map(category => {

        return {
          label: category.name,
          value: category.id
        }
      });

      setSelectOptions(fetchedCategories);
    }

    fetchDishCategories()
  },[]);

  return (
  /*     <Mobile_wrapper> */
      <Container>
        <TurnBackButton />

        <h1>
          Novo prato
        </h1>      

        <Form>
          <Picture>
            <img src='https://github.com/Macedovin.png' alt='Imagem do prato'/>

            <p>
              Imagem do prato
            </p>
            <label htmlFor='picture'>
            
              <input 
                id='picture'
                type='file'

                 //onChange={handleAvatarChange} 
              />
              <Upload />      
              Selecione imagem
            </label>
          </Picture>

          <Input 
            className='new_dish'
            label='Nome'
            id='dish_name'
            placeholder='Ex.: Salada Ceasar'
            onChange={e => setDishName(e.target.value)}
          />

          <Select.Root>
            <Select.Label label='Categoria' />
            <Select.Wrapper>
              {isSelectInputShown &&
               
                <Select.Input
                  placeholder='Nova categoria. Ex.: Bebidas' 
                  value={newCategory}
                  onChange={e => {
                    setNewCategory(e.target.value)
                    handleCategoryName()
                  }} 
                />
              }
              {isSelectShown &&
                
                <Select.Inner 
                  id='categories'
                  selectValue={selectValue}
                  placeholder='Selecione uma categoria'
                  options={selectOptions}
                  onChange={(option) => {
                    setSelectValue(option)
                    handleSelectedOption(option)
                  }} 
                />
              }
              <Select.Button onClick={handleSelectInput}/>
            </Select.Wrapper>
          </Select.Root>

          <IngredientsSection>
            <h2>
              Ingredientes
            </h2>
            <div className='display-ingredients'>

              {ingredients && 

                ingredients.map((ingredient, index) => (

                  <IngredientsTag 
                    className='ingredients'
                    key={String(index)}
                    actionButton
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />

                ))

              }
              <div className='only-new'>

                <IngredientsTag
                  className='new-ingredients'
                  isNew 
                  placeholder='Adicionar'
                  actionButton
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </div>

            </div>
          </IngredientsSection>
          
          <Input 
            className='new_dish'
            label='Preço'
            id='dish_price'
            placeholder='R$ 00,00'
            onChange={e => setPrice(numberFromCurrency(e.target.value))}
          />

          <Textarea 
            className='new_dish'
            label='Descrição'
            id='description'
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            onChange={e => setDescription(e.target.value)}
          />

          <Button
            type='button'
            title='Salvar alterações'
            onClick={event => handleNewDish(event)}
            //disabled={isDisabled}
          />

        </Form>
      </Container>
  /*     </Mobile_wrapper> */
  );
}