import { Container, LabelWrapper } from './styles';

import { forwardRef } from 'react'; 

import { InputError } from './InputError';

export const Input = forwardRef(function Input({ label, id, type, errors, register, className, ...rest}, ref) {

  return(
    <Container 
      className={className}
    >
      <LabelWrapper
        className={className}
      >
        <label htmlFor={id}>
          {label}
        </label>  
        {errors && (
            <InputError
              message={errors}
            />  
          )
        }  
      </LabelWrapper>
      <input 
        id={id}
        type={type}
        register={register}
        {...rest}
        ref={ref}
      />
    </Container>
  );
});