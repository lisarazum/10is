const accordionBanner = document.querySelector('[data-banner-certificate]')

if (accordionBanner) {
  const accordionBannerBtn = document.querySelector('[data-banner-more-btn]')
  const accordionBannerContent = document.querySelector('[data-banner-active]')

  if (accordionBannerBtn && accordionBannerContent) {
    accordionBannerBtn.addEventListener('click', () => {
      if (accordionBannerContent.getAttribute('data-banner-active') === 'false') {
        accordionBannerContent.setAttribute('data-banner-active', true)
        accordionBannerContent.style.maxHeight = accordionBannerContent.scrollHeight + 'px'
        accordionBannerBtn.textContent = 'Скрыть'
      } else if (accordionBannerContent.getAttribute('data-banner-active') === 'true') {
        accordionBannerContent.setAttribute('data-banner-active', false)
        accordionBannerContent.style.maxHeight = null
        accordionBannerBtn.textContent = 'Подробнее'
      }
    })
  }
}
