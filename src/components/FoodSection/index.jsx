import { Container } from './styles';

import { Children } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

export function FoodSection({ title,children }) {

  return(
       
    <Container>
      <h2>
        {title}
      </h2>

        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          slidesPerGroupSkip={1}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 2,            
              spaceBetween: 125,
            },
            375: {
              slidesPerView: 2,            
              spaceBetween: 95,
            },
            425: {
              slidesPerView: 2,            
              spaceBetween: 46,
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