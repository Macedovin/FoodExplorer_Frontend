import { Container, LabelWrapper, InputWrapper } from './styles';

import { useState } from 'react';

import { forwardRef } from 'react'; 

import { InputError } from '../InputError';

import { ReactComponent as EyeOn } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeOff } from '../../assets/icons/eye-off.svg'; 

export const PasswordInput = forwardRef(function PasswordInput({ name, label, errors, ...rest }, ref) {
    const [passwordType, setPasswordType] = useState("password");
  
    function handleInputType() {
      if(passwordType === "password") {
        
        setPasswordType("text");
        return;
      } 
      
      setPasswordType("password");
    }
  
    return(
      <Container>
        <LabelWrapper>
          <label htmlFor='password'>
            {label}
          </label>
          {errors && (
  
            <InputError
                message={errors}
            />
          )} 
        </LabelWrapper>
        <InputWrapper>      
          <input
            name={name} 
            id='password'
            type={passwordType}
            {...rest}
            ref={ref} 
          />
          <button
            className='eyeButton'
            type='button'
            onClick={handleInputType}
          >
            { passwordType === "password" ? <EyeOn /> : <EyeOff /> }  
          </button>
        </InputWrapper>
      </Container>
    );
  });