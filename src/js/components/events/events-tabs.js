function createTabsList(index) {
  const eventsTabButtons = document.querySelectorAll('[data-event-tab]')
  const eventsTabContents = document.querySelectorAll('[data-event-content]')

  eventsTabButtons[index].classList.add('active')
  eventsTabContents[index].classList.add('active')

  eventsTabButtons.forEach((el, index) => {
    el.addEventListener('click', () => {
      clearActiveClass()
      el.classList.add('active')
      eventsTabContents[index].classList.add('active')
    })
  })

  function clearActiveClass() {
    eventsTabButtons.forEach(el => {
      el.classList.remove('active')
    })

    eventsTabContents.forEach(el => {
      el.classList.remove('active')
    })
  }
}

createTabsList(0)
