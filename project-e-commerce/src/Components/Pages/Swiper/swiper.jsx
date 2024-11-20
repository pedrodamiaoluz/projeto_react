import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards from '../Main/Cards/Cards';
import CardSwiper from './cardsswiper';
import * as S from "./style"

export default () => {
  return (
    <S.ContainerSwiper>
    <Swiper className="Swiper"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      <SwiperSlide>
         <CardSwiper />
      </SwiperSlide>
      
    </Swiper>
    </S.ContainerSwiper>
  );
};