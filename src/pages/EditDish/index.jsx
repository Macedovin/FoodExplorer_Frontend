import { Container, Form, Picture, IngredientsSection, ActionButtons } from './styles';

import { useState } from 'react';

import { TurnBackButton } from '../../components/TurnBackButton';
import { Input } from '../../components/Input';  
import { Select } from '../../components/Select';
import { IngredientsTag } from '../../components/IngredientsTag';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

import { ReactComponent as Upload } from '../../assets/icons/UploadSimple.svg';
import { DishDetails } from '../DishDetails';

export function EditDish() {
  const [isDisabled, setIsDisabled] = useState(true);
  
  const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];

  const ingredients= [

  ]

  const [value, setValue] = useState(options[0]);
  const [isSelectInputShown, setIsSelectInputShown] = useState(false);
  const [isSelectShown, setIsSelectShown] = useState(true);

  function handleSelectInput(event) {
    setIsSelectInputShown(prevState => !prevState);
    setIsSelectShown(prevState => !prevState);
  }

  return (
  /*     <Mobile_wrapper> */
      <Container>
        <TurnBackButton />

        <h1>
          Editar prato
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
              Selecione imagem para alterá-la
            </label>
          </Picture>

          <Input 
            className='new_dish'
            label='Nome'
            id='dish_name'
            placeholder='Ex.: Salada Ceasar'
            value
          />

          <Select.Root>
            <Select.Label label='Categoria' />
            <Select.Wrapper>
              {isSelectInputShown &&
               
                <Select.Input placeholder='Nova categoria' />
              }
              {isSelectShown &&
                
                <Select.Inner 
                  id='categories'
                  value={value}
                  options={options}
                  onChange={option => setValue(option)} 
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

                ingredients.map(ingredients => (

                  <IngredientsTag 
                    className='ingredients'
                    key={String(ingredients.id)}
                    value={ingredients.name}
                    actionButton
                  />

                ))
              }
              <div className='only-new'>

                <IngredientsTag
                  isNew 
                  placeholder='Adicionar'
                  actionButton
                />
              </div>

            </div>
          </IngredientsSection>
          
          <Input 
            className='new_dish'
            label='Preço'
            id='dish_price'
            placeholder='R$ 00,00'
            value
          />

          <Textarea 
            className='new_dish'
            label='Descrição'
            id='description'
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            value
          />
          <ActionButtons>
            <Button 
              className='delete'
              type='submit'
              title='Excluir prato'
            />
            <Button 
              type='submit'
              title='Salvar alterações'
              disabled={isDisabled}
            />
          </ActionButtons>

        </Form>
      </Container>
  /*     </Mobile_wrapper> */
  );
}