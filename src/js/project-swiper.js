import Swiper from 'swiper/bundle';

const swiper = new Swiper('.project .swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  mousewheel: true,

  keyboard: {
    enabled: true,
  },
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1000,

  grabCursor: true,
});
