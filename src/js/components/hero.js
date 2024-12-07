// const heroVideo = document.querySelector('.js-hero-video')
// if (window.innerWidth > 569) {
//   heroVideo.setAttribute('poster', '/img/main/video.jpg')
// } else {
//   heroVideo.setAttribute('poster', '/img/main/video-mob.jpg')
// }

import Swiper from 'swiper/bundle';
const heroSlider = document.querySelector('.js-hero-swiper');

if (heroSlider) {
  const sliderHero = new Swiper(heroSlider, {
    slidesPerView: 1,
    spaceBetween: 500,
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.js-hero-swiper-pagination',
      clickable: true,
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' +  '<i></i>' + '<b></b>'  + '</span>';
      },
    },
  });

  const slides = heroSlider.querySelectorAll('.hero-swiper__slide')
  const paginationBullets = heroSlider.querySelectorAll('.swiper-pagination-bullet')
  console.log(heroSlider.style)
  if (paginationBullets.length > 0) {
    paginationBullets.forEach(el => {
      if (window.innerWidth > 1440) {
        el.style.width = `${660 / slides.length}px`
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1440) {
        el.style.width = `${450 / slides.length}px`
      } else if (window.innerWidth < 768) {

        el.style.width = `${heroSlider.offsetWidth  / slides.length - (slides.length - 1) * 7}px`
      }
    })
  }
}
