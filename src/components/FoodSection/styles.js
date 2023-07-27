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
    width: 100%;
    height: 100%;
    
    padding-block: 2.4rem;
    
    position: relative;
    
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (min-width: 768px) {
      mask-image: linear-gradient(to right, transparent 0%, black 10% 90%, transparent 100%);

      .swiper-button-prev,
      .swiper-button-next {
        display: block;
        
        position: absolute;
        z-index: 105;
        top: 50%;
        
        &::after {
          color: ${({ theme }) => theme.primary_text};
          
          font-size: 3rem;
        }
      }
      
      .swiper-button-prev {
        left: 4rem;
      }
      
      .swiper-button-next {
        right: 4rem;
      }
    }
    
  }
  
  @media only screen and (min-width: 768px) {
    padding-inline: 4rem;
    
    > h2 {
      font-size: 3.2rem;
      
      padding-left: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding-inline: 11rem;
  }
`;