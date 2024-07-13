import Swiper from 'swiper/bundle';

const swiper = new Swiper('.project .swiper', {
  loop: false,
  onlyInViewport: true,
  mousewheel: true,

  keyboard: {
    enabled: true,
  },
  slidesPerView: 1,
  spaceBetween: 28,
  navigation: {
    nextEl: '.swiper-button-next-project',
    prevEl: '.swiper-button-prev-project',
  },
  speed: 1000,

  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: false,
  },

  direction: 'vertical',

  grabCursor: true,
});
