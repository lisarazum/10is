import Swiper from 'swiper/bundle';

const sliderAccomodation = new Swiper('[data-main-slider]', {
  slidesPerView: 1,
  spaceBetween: 10,
  initialSlide: 0,
  controller: {
    control: undefined,
  },
  // loop: true,
});

const sliderThumbsAccomodation = new Swiper('[data-mini-slider]', {
  slidesPerView: 3,
  spaceBetween: 18,
  slideToClickedSlide: true,
  // initialSlide: 1,
  controller: {
    control: sliderAccomodation,
  },
  // loop: true,
});

// sliderThumbsAccomodation.controller.control = sliderAccomodation;
