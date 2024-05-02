import Swiper from 'swiper/bundle';

const sliderLocations = new Swiper('.js-locations-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    568: {
      spaceBetween: 30,
    },
    1441: {
      spaceBetween: 40,
    }
  },

  navigation: {
    nextEl: '.js-locations-btn-next',
    prevEl: '.js-locations-btn-prev',
  },
});


