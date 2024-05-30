import Swiper from 'swiper/bundle';

const sliderPhotoReviews = new Swiper('.js-photo-reviews', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    320: {
      spaceBetween: 16,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    568: {
      spaceBetween: 16,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    767: {
      spaceBetween: 32,
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    1441: {
      spaceBetween: 40,
      slidesPerView: 4,
      slidesPerGroup: 1,
    }
  },

  pagination: {
    el: '.js-photo-reviews-pagination',
    clickable: true,
  }
});
