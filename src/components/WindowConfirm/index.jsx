import { Container, ConfirmBox, Text, ActionButtons } from './styles';

import { useState } from 'react'; 

import { Button } from '../Button';
import { Fragment } from 'react';

export function WindowConfirm({ isOpen = false, onConfirm, description, confirmButtonLabel, onClose }) {

  return (

    isOpen && ( 
      
      <Container
>
        <ConfirmBox>
          <Text>
            <h2>
              Tem certeza?
            </h2>
            <p>
              {description}
            </p>
          </Text>
          <ActionButtons>
            <Button 
              className='cancel'
              type='button'
              title='Cancelar'
              onClick={onClose}
            />
            <Button 
              type='button'
              title={confirmButtonLabel}
              onClick={onConfirm}
            />
          </ActionButtons>
        </ConfirmBox>
      </Container>
     )       
    
  );
}