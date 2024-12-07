import Swiper, { Grid } from 'swiper/bundle';
Swiper.use([Grid]);

const sliderCamps = document.querySelectorAll('.js-camps-slider')

if (sliderCamps.length > 0) {
  sliderCamps.forEach((slider, index) => {

    const nextBtn = slider.querySelector('.swiper__btn-next')
    nextBtn.classList.add(`js-camps-btn-next-${index}`)
    const prevBtn = slider.querySelector('.swiper__btn-prev')
    prevBtn.classList.add(`js-camps-btn-prev-${index}`)
    const pagination = slider.querySelector('.swiper-pagination')
    pagination.classList.add(`js-camps-pagination-${index}`)

    if (pagination && window.innerWidth > 580) {
      slider.style.paddingBottom = '40px'
    } else {
      slider.style.paddingBottom = '30px'
    }

    const sliderCamp = new Swiper(slider, {
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        560: {
          slidesPerView: 1,
          spaceBetween: 20,

          grid: {
            fill: 'row',
            rows: 2,
          },
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,

          grid: {
            fill: 'row',
            rows: 2,
          },
        }
      },
      navigation: {
        nextEl: `.js-camps-btn-next-${index}`,
        prevEl: `.js-camps-btn-prev-${index}`,
      },

      pagination: {
        el: `.js-camps-pagination-${index}`,
        clickable: true,
      },
    });
  })

}




