import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
