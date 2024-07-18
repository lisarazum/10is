function createTabsList(index) {
  const courtsTabButtons = document.querySelectorAll('[data-court-tab]')
  const courtsTabContents = document.querySelectorAll('[data-court-content]')

  courtsTabButtons[index].classList.add('active')
  courtsTabContents[index].classList.add('active')

  courtsTabButtons.forEach((el, index) => {
    el.addEventListener('click', () => {
      clearActiveClass()
      el.classList.add('active')
      courtsTabContents[index].classList.add('active')
    })
  })

  function clearActiveClass() {
    courtsTabButtons.forEach(el => {
      el.classList.remove('active')
    })

    courtsTabContents.forEach(el => {
      el.classList.remove('active')
    })
  }
}

createTabsList(0)
