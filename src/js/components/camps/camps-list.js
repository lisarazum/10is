function setCampsItems() {
  const campItems = document.querySelectorAll('.js-camps-item')
  const campMoreBtn = document.q

  if (campItems) {
    campItems.forEach(el => {
      if (el.classList.contains('finished')) {
        el.querySelector('.js-camps-more-btn').innerHTML = 'Сбор закончен'
        el.querySelector('.js-camps-book-btn').innerHTML = 'Смотреть отчет'
      }
    })
  }
}

setCampsItems()
