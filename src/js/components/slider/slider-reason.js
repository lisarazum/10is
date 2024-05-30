import Swiper from 'swiper/bundle';

const sliderReasons = new Swiper('.js-reason-slider', {
  slidesPerView: 1,
  spaceBetwee: 20,

  pagination: {
    el: '.js-reason-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.js-reason-next',
    prevEl: '.js-reason-prev',
  },

});
