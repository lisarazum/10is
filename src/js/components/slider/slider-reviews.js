import Swiper from 'swiper/bundle';

const sliderReviews = new Swiper('.js-reviews-swiper', {
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
    nextEl: '.js-reviews-btn-next',
    prevEl: '.js-reviews-btn-prev',
  },
});

const sliderFractions = document.querySelectorAll('.reviews-fraction')
const reviewsSlides = document.querySelectorAll('.swiper-slide')
for (let i = 0; i <= sliderFractions.length - 1; i++) {
  sliderFractions[i].innerHTML = `<span class="current-slide">${addZero(i + 1)}</span> <span class="separator">/</span> <span class="total-slide">${addZero(sliderFractions.length)}</span>`
}

function addZero(el) {
  if (el < 10) {
    return `0${el}`
  }
}


