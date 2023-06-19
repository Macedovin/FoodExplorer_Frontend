import styled, { keyframes } from 'styled-components';

import macaroonsImg from '../../assets/macarrons_full.png';

const growIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15rem) scale(0);
  }

  75% {
    opacity: 0.25;
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeUp = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-2.5rem);
  }

  75% {
    opacity: 0.55;
  }

  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
` ;

export const Container = styled.div`
  display: flex;

  height: 15rem;
  width: 100%;

  margin-top: 1.5rem;

  position: relative;

  overflow: hidden;
`;

const slideFromLeft = keyframes`
  0% { 
    opacity: 0;
    transform: translateX(-4.5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0rem);
  }
` ;


export const Image = styled.div`
  
  position: absolute;
  bottom: 0;
  left: -0.75rem;

  height: 15rem;
  width: 19rem;

  background: url(${macaroonsImg}) no-repeat center center;
  background-size: cover;
  background-position-y: top;

  animation: ${growIn} 1.3s 0.5s ease-in-out backwards;
`;

export const GradientText = styled.div`
  align-self: flex-end;

  height:12rem;
  width: 100%;

  display: flex;
  align-items: center;

  margin-left: 3.2rem;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  
  border-radius: 0.3rem;

  animation: ${fadeUp} 0.4s ease-in-out;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.primary_text};

  margin-left: 14.5rem;

  > h2 { 
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;

    animation: ${slideFromLeft} 0.5s 0.6s ease-in-out backwards;
  }

  > p {
    font-size: 1.2rem;
    line-height: 1.7rem;

    animation: ${slideFromLeft} 0.5s 0.7s ease-in-out backwards;
  }

`;