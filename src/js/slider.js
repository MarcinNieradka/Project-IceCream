import Swiper, { Pagination } from 'swiper';

var swiper = new Swiper('.mySwiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
