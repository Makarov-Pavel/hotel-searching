import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

 const SwiperComp = () => {
  return (
    <Swiper
      spaceBetween={-70}
      slidesPerView={3}
      style={{ width:'600px', height: '149px', cursor: 'grab', }}
    >
      <SwiperSlide ><img src='images/swiper-img-1.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-2.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-3.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-1.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-2.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-3.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-1.png' className='slide__img' alt='slide'></img></SwiperSlide>
      <SwiperSlide ><img src='images/swiper-img-2.png' className='slide__img' alt='slide'></img></SwiperSlide>
    </Swiper>
  );
};

export default SwiperComp