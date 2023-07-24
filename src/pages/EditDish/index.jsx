import { Container, Form, Picture, IngredientsSection, ActionButtons } from './styles';

import { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useConfirmDialog } from '../../hooks/confirmDialog.jsx';

import { formatCurrency, numberFromCurrency } from '../../utilities/formatCurrency';

import { api } from '../../services/api';

import { Toast } from '../../Toast'; 

import { WindowConfirm } from '../../components/WindowConfirm';
import { TurnBackButton } from '../../components/TurnBackButton';
import { Input } from '../../components/Input';  
import { Select } from '../../components/Select';
import { IngredientsTag } from '../../components/IngredientsTag';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

import picturePlaceholder from '../../assets/icons/dish_picture.svg';
import { ReactComponent as Upload } from '../../assets/icons/UploadSimple.svg';

export function EditDish() {
  const params = useParams();
  const navigate = useNavigate();

  const confirm = useConfirmDialog();

  const [isDisabled, setIsDisabled] = useState(true);
  
  const [picture, setPicture] = useState(null);
  const [pictureFile, setPictureFile] = useState(null)

  const [dishName, setDishName] = useState('');

  /* -------------- Select logic data --------------- */

  const [newCategory, setNewCategory] = useState('');

  const [selectValue, setSelectValue] = useState({});
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

    if (event.target.files.length > 0) {
      setIsDisabled(false);
    }
  } 

  function handleSelectInput(event) {
    
    setIsSelectInputShown(prevState => !prevState);
    setIsSelectShown(prevState => !prevState);

    setCategoryID('');
    
    if (newCategory) {
      setSelectValue('');
    }
    
    if (!newCategory && !selectValue || selectValue.value === '') {
      setSelectValue({label: data.category_name, value: data.category_id});
    }
  }

  function handleSelectOption(option) {
    if(option) {

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

  async function handleDeleteDish(event) {
    //event.preventDefault();

    const adminUserConfirmDishExclusion = await confirm({
      description: 'Ao prosseguir este prato será completa e definitivamente excluído.',
      confirmButtonLabel: 'Excluir' 
    });

    if (adminUserConfirmDishExclusion) {
      await api.delete(`/dishes/${params.id}`);

      Toast().handleSuccess('Prato excluído com sucesso.');

      navigate('/');
    }
    return
  }

  async function registerNewCategory() {

    try {
      const response = await api.post('/dish_categories', { name: newCategory });
    
      const { category } = response.data;

      const newCategoryId = category.id;

      return newCategoryId;

    } catch(error) {
      if(error.response) {
        Toast().handleError(error.response.data.message);
      } else { 
        return console.error;
      }
    } 
  }

  async function registerDishUpdates(cat_id) {
    
    const dataContent = new FormData();
    
    const data = JSON.stringify({
      new_name: dishName, 
      new_description: description, 
      new_price: numberFromCurrency(price), 
      new_category_id: cat_id, 
      new_ingredients: ingredients
    });

    dataContent.append('data', data);
    dataContent.append('picture', pictureFile);

    try {
      await api.put(`/dishes/${params.id}`, dataContent);

      Toast().handleSuccess('Prato atualizado com sucesso!');

      navigate('/');

    } catch(error) {
      if(error.response) {
        return Toast().handleError(error.response.data.message);
      } else {
        Toast().handleError('Não foi possível atualizar o prato.');
      }
    }
  }

  async function handleUpdateDish(event) {
    event.preventDefault();

    if (newIngredient) {
      return Toast().handleWarning('Ingrediente digitado, mas não adicionado. Verifique.')
    }     

    const priceHasCurrencySymbol = price.includes('R$');
    const priceHasStrangeSpaceBeforeComma = price.includes(' ,');
    const priceHasStrangeSpaceAfterComma = price.includes(', ');

    if (!priceHasCurrencySymbol || priceHasStrangeSpaceBeforeComma || priceHasStrangeSpaceAfterComma) {
      return Toast().handleWarning('O preço esta fora do padrão. Verifique.');
    }

    if (newCategory) {

      const newCategoryID = await registerNewCategory();

      if (!newCategoryID || newCategoryID === undefined) {
        return;
      }

      await registerDishUpdates(newCategoryID);
      
    } else {

      await registerDishUpdates(categoryID);
    }
  }

  useEffect(() => {

    setTimeout(() => {

      const ingredientsCompare = data.dishIngredients.map(ingredient => ingredient.name);

      const compareIngredientsArrays = (ingredientsCompare, ingredients) => ingredientsCompare.length === ingredients.length && ingredientsCompare.every((element, index) => element === ingredients[index]);
      
      const hasNoCategoryID = !categoryID && !newCategory;
      
      setIsDisabled(data.dish_name === dishName && data.price.toFixed(2) == numberFromCurrency(price) && data.description === description && compareIngredientsArrays(ingredientsCompare, ingredients) && hasNoCategoryID );
    }, 1000)

  }, [data, dishName, description, price, ingredients, categoryID, newCategory]);

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`);
      
      const dishToEdit = response.data;
      
      const pictureURL = dishToEdit.picture ? `${api.defaults.baseURL}/files/picture/${dishToEdit.picture}`: picturePlaceholder; 
      
      setPicture(pictureURL);
      
      setDishName(dishToEdit.dish_name);
      
      dishToEdit.dishIngredients ? setIngredients(dishToEdit.dishIngredients.map(ingredients => ingredients.name)) : setIngredients(ingredients);
      
      setSelectValue({label: dishToEdit.category_name, value: dishToEdit.category_id});

      setPrice(formatCurrency(dishToEdit.price));
      setDescription(dishToEdit.description);

      setData(dishToEdit);
    }

    fetchDish();
  }, []);

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
    
  }, [])

  return (
  /*     <Mobile_wrapper> */
      <>    
        <Container>
          <TurnBackButton />

          <h1>
            Editar prato
          </h1>      

          <Form>
            <Picture>
              <img 
                src={picture} 
                alt={`Imagem de ${dishName}`}
              />

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
                Selecione imagem para alterá-la
              </label>
            </Picture>

            <Input
              type='text' 
              className='new_dish'
              label='Nome'
              id='dish_name'
              placeholder='Ex.: Salada Ceasar'
              onChange={e => setDishName(e.target.value)}
              value={dishName}
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
                      handleSelectOption(option)
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
              value={price}
              onChange={e => setPrice(e.target.value)}
            />

            <Textarea 
              className='new_dish'
              label='Descrição'
              id='description'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <ActionButtons>
              <Button 
                className='delete'
                type='button'
                title='Excluir prato'
                onClick={handleDeleteDish}
              />
              <Button 
                type='submit'
                title='Salvar alterações'
                onClick={handleUpdateDish}
                disabled={isDisabled}
              />
            </ActionButtons>

          </Form>
        </Container>
      </>
  /*     </Mobile_wrapper> */
  );
}