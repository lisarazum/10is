import Swiper from 'swiper/bundle';

const sliderPeople = new Swiper('.js-people-slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    568: {
      spaceBetween: 89,
    },
    1440: {
      spaceBetween: 140,
    },
    1920: {
      spaceBetween: 180,
    }
  },

  navigation: {
    nextEl: '.js-people-btn-next',
    prevEl: '.js-people-btn-prev',
  },
});


