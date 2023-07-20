import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

import { Children } from 'react'; 
import { FoodCard } from '../FoodCard'; 

export function FoodSection({ content, title,children }) {

/*   const { spaceBetween, slidesPerView, modules, loop, navigation } = settings; */
/* 
const arrayChildren = Children.toArray(children); */

  const hasContent = content && content.length

  return(
       
    <Container>
      <h2>
        {title}
      </h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        mousewheel={true}
        slidesPerGroupSkip={2}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 2,            
            spaceBetween: 125,
          },
          375: {
            slidesPerView: 2,            
            spaceBetween: 70,
          },
          425: {
            slidesPerView: 2,            
            spaceBetween: 16,
          },
        }}
      >
      {Children.map(children, child => (

            <SwiperSlide>{child}</SwiperSlide>

          )) 
        }          
      </Swiper>
    </Container>

  );
}