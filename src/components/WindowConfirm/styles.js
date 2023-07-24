import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  height: 100vh;
  width: 100%;
  place-content: center;
  //overflow: hidden;

  background-color: rgba(35, 33, 41, 0.6);

  padding-inline: 3.9rem;
  
  @media only screen and (max-width: 375px) and (min-width: 320px) {

    padding-inline: 1.9rem;
  }
  
  `;

export const ConfirmBox = styled.main`
  background-color: ${({ theme }) => theme.windowConfirm_bg};

  display: flex;
  flex-direction: column;
  
  gap: 3.6rem;

  border-radius: 0.6rem;
  box-shadow: 0px 0.2rem 0.7rem hsla(0, 0%, 0%, 0.5);

  margin-inline: auto;

  padding: 2.9rem;

  @media only screen and (max-width: 390px) and (min-width: 320px) {
    padding-inline: 1.7rem;
  }
`;

export const Text = styled.div`
  
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.ingredient_tag};
  
  > h2 {
    font-size: 2.4rem;

    margin-bottom: 1.2rem;
  }

`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;

  gap: 1.5rem;

  > button {
    height: 4.8rem;
    //width: 10rem; 

    padding-inline: 0.5rem;

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.2);
    }

  }

  .cancel {
    background-color: ${({ theme }) => theme.select_background};
  }
`;