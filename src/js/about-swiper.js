// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.about-tecs.swiper', {
direction: 'horizontal',
loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },


  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  // freeMode: true,

  grabCursor: true,

  slidesPerView: 2,
  spaceBetween: 0,

  // autoplay: {
  //   delay: 1000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true,
  // },
 
  breakpoints: {
        768: {
        slidesPerView: 3,
             },
    
        1440: {
          slidesPerView: 6,
         }
    }

});