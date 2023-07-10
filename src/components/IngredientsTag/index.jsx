import { Container } from './styles';

import { useState } from 'react';

import { ReactComponent as Adding } from '../../assets/icons/Plus.svg'; 
import { ReactComponent as Delete } from '../../assets/icons/Close.svg';

export function IngredientsTag({ isNew = false, actionButton = false, value, onClick, className, ...rest }) {
  const [text, setText] = useState('');

  return (

    <Container
      className={className} 
      isNew={isNew}
    >
      {isNew 
        ?
          <input 
            type='text' 
            value={value}
            readOnly={!isNew}
            size="23"
            {...rest}
          /> 
        :
          <span>
            {value}
          </span>
      }
      {actionButton &&

        <button
          type='button'
          onClick={onClick}
          className={isNew ? 'btn-add' : 'btn-delete'}
        >
          {isNew ? <Adding /> : <Delete/>}
        </button>

      }
    </Container>

  );
}