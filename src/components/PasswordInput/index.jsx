import { Container, InputWrapper } from './styles';

import { ReactComponent as EyeOn } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeOff } from '../../assets/icons/eye-off.svg'; 

import { useState } from 'react';

export function PasswordInput({ label, ...rest }) {
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
      <label htmlFor='password'>
        {label}
      </label>
      <InputWrapper>      
        <input 
          id='password'
          type={passwordType}
          {...rest} 
        />
        <button
          type="button"
          onClick={handleInputType}
        >
          { passwordType === "password" ? <EyeOn /> : <EyeOff /> }  
        </button>
      </InputWrapper>
    </Container>
  )
}