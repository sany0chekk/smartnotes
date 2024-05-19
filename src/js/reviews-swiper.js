'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: true,
  delay: 3000,

  loop: true,
});
