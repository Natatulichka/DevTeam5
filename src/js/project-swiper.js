import Swiper from 'swiper/bundle';

const swiper = new Swiper('.project .swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: false,
  onlyInViewport: true,
  mousewheel: true,

  keyboard: {
    enabled: true,
  },
  slidesPerView: 1,
  spaceBetween: 28,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-project',
    prevEl: '.swiper-button-prev-project',
    // nextEl: '.project .swiper-button-next',
    // prevEl: '.project .swiper-button-prev',
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
