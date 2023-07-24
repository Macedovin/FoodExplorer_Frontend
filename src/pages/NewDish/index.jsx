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

export function NewDish() {

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);
  
  const [picture, setPicture] = useState(null);
  const [pictureFile, setPictureFile] = useState(null);

  const [dishName, setDishName] = useState('');
  
  /* -------------- Select logic data --------------- */

  const [newCategory, setNewCategory] = useState('');
  
  const [selectValue, setSelectValue] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  const [isSelectInputShown, setIsSelectInputShown] = useState(false);
  const [isSelectShown, setIsSelectShown] = useState(true);
  
  const [categoryID, setCategoryID] = useState('');

  /* -------------- Select logic data --------------- */
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  
  const [data, setData] = useState({});

  function handlePictureChange(event) {
    const file = event.target.files[0]; 

    setPictureFile(file);

    const imagePreview = URL.createObjectURL(file);
    setPicture(imagePreview);
  } 

  function handleSelectInput() {

    setIsSelectInputShown(prevState => !prevState);
    setIsSelectShown(prevState => !prevState);
    setSelectValue('');
    setCategoryID('');
    setNewCategory('');

  }

  function handleSelectedOption(option) {

    if(option) {
      setNewCategory('');

      const optionValueAsCategoryID = option.value;

      setCategoryID(optionValueAsCategoryID);
    }

    if(!option) {

      setCategoryID('');
      return
    } 
  }

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
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function registerNewCategory() {
    
    try {
      const response = await api.post('/dish_categories', { name: newCategory })

      const { category } = response.data;
      
      const newCategoryId = category.id;
      
      return newCategoryId; 
        
    } catch(error) {
      if(error.response) {
        return Toast().handleError(error.response.data.message);
      } else {
        return console.error;
      }
    }
  }

  async function registerNewDish(cat_id) {

    const dataContent = new FormData();
    
    const data = JSON.stringify({
      name: dishName,
      description,
      price: numberFromCurrency(price),
      category_id: cat_id,
      ingredients
    });
    
    dataContent.append('data', data);
    dataContent.append('picture', pictureFile);     

    try {
      await api.post('/dishes', dataContent); 
      
      Toast().handleSuccess('Prato cadastrado com sucesso.');

      navigate('/');

    } catch(error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Não foi possível cadastrar o prato.');
      }

      fetchDishCategories();
    }  
  }

  async function handleNewDish(event) {
    event.preventDefault();

    if (newIngredient) {
      return Toast().handleWarning('Ingrediente digitado, mas não adicionado. Verifique.')
    }         
  
    const hasCurrencySymbol = price.includes('R$');
    const hasStrangeSpaceBeforeComma = price.includes(' ,');
    const hasStrangeSpaceAfterComma = price.includes(', ');

    if (!hasCurrencySymbol || hasStrangeSpaceBeforeComma || hasStrangeSpaceAfterComma) {
      return Toast().handleWarning('O preço esta fora do padrão. Verifique.');
    }

    if(newCategory) {

      const newCategoryID = await registerNewCategory();

      if (!newCategoryID || newCategoryID === undefined) {
        return;
      }

      await registerNewDish(newCategoryID);
    
    } else {

      await registerNewDish(categoryID);
    }
  }

  useEffect(() => {
    
    const hasCategoryID = categoryID || newCategory;

    setIsDisabled(!dishName || !hasCategoryID || ingredients.length === 0 || !price || !description);

  }, [dishName, description, price, ingredients, categoryID, newCategory]);

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

    fetchDishCategories();

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
            {picture && 
              <img src={picture} alt='Imagem do prato'/>
            }
            <p>
              Imagem do prato
            </p>
            <label htmlFor='picture'>
            
              <input 
                id='picture'
                type='file'
                onChange={handlePictureChange} 
              />
              <Upload />      
              Selecione imagem
            </label>
          </Picture>

          <Input
            type='text' 
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
                  }} 
                />
              }
              {isSelectShown &&
                
                <Select.Inner 
                  id='categories'
                  selectValue={selectValue}
                  placeholder='Selecione uma categoria'
                  hasEmptyOption
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
                    value={ingredient}
                    actionButton
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />

                ))

              }
              <div className='only-new'>

                <IngredientsTag
                  className='new-ingredients'
                  isNew 
                  placeholder='Adicionar'
                  value={newIngredient}
                  onChange={e => setNewIngredient(e.target.value)}
                  actionButton
                  onClick={handleAddIngredients}
                />
              </div>

            </div>
          </IngredientsSection>
          
          <Input 
            type='text'
            className='new_dish'
            label='Preço'
            id='dish_price'
            placeholder='R$ 00,00'
            onChange={e => setPrice(e.target.value)}
          />

          <Textarea 
            className='new_dish'
            label='Descrição'
            id='description'
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            onChange={e => setDescription(e.target.value)}
          />

          <Button
            type='submit'
            title='Salvar alterações'
            onClick={handleNewDish}
            disabled={isDisabled}
          />
        </Form>
      </Container>
  /*     </Mobile_wrapper> */
  );
}