import Swiper from 'swiper/bundle';



const sliderThumbsAccomodation = new Swiper('[data-mini-slider]', {
  // slidesPerView: 3,
  // spaceBetween: 18,
  // slideToClickedSlide: true,
  // controller: {
  //   control: sliderAccomodation,
  // },

  //
  // navigation: {
  //   nextEl: '.js-accomodation-btn-next',
  //   prevEl: '.js-accomodation-btn-prev',
  // },

  loop: true,
  spaceBetween: 18,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  mousewheel: true,

});

const sliderAccomodation = new Swiper('[data-main-slider]', {
  // slidesPerView: 1,
  // spaceBetween: 10,
  // initialSlide: 0,
  // controller: {
  //   control: undefined,
  // },

  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".js-accomodation-btn-next",
    prevEl: ".js-accomodation-btn-prev",
  },
  thumbs: {
    swiper: sliderThumbsAccomodation,
  },
});
