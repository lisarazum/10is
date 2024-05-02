const accordionItems = document.querySelectorAll('.faq-list__item')

accordionItems.forEach(el => {
  el.addEventListener('click', (e) => {
    let self = e.currentTarget
    let content = self.querySelector('.faq-list__content')

    self.classList.toggle('active')

    if (self.classList.contains('active')) {
      self.setAttribute('aria-expanded', 'true')
      content.setAttribute('aria-hidden', 'false')
      content.style.maxHeight = content.scrollHeight + 'px'
    } else {
      self.setAttribute('aria-expanded', 'false')
      content.setAttribute('aria-hidden', 'true')
      content.style.maxHeight = null
    }
  })
})
