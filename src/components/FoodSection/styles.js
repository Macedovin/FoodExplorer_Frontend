import styled, { css } from 'styled-components';

export const Container = styled.section`

  position: relative;

  > h2 {
    color: ${({ theme }) => theme.primary_text};

    font-size: 1.8rem;
    font-weight: 500;

    padding-left: 2.4rem;

  }

  .swiper {

    width: 100vw;
    height: 100%;

    padding-block: 2.4rem;
    
  }
 
  .swiper-wrapper {
    position: relative;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

`;