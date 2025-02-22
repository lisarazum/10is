import Swiper  from 'swiper/bundle';
const teamSlider = document.querySelector('.js-team-slider')

if (teamSlider) {
  const sliderTeam = new Swiper(teamSlider, {
    breakpoints: {
      0: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.js-team-btn-next',
      prevEl: '.js-team-btn-prev',
    },
  });
}
