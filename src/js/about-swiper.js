// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.about .swiper', {
  slidesPerView: 2,

  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
      },

  spaceBetween: 0,

  loop: true,

  mousewheel: true,

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },

    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },

  speed: 1000,

  grabCursor: true,
});



