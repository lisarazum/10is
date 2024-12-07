import Header from './components/header'
import Popup from "./components/popup";

const html = document.querySelector('html')
const headerEl = document.querySelector('.js-header')
const burgerEl = document.querySelector('.js-burger')
const menuEl = document.querySelector('.js-menu')
const header = new Header(headerEl, 0, burgerEl, menuEl)
const showPopupButtons = document.querySelectorAll('.js-show-popup')
const thanksPopupEl = document.querySelector('.js-popup[data-popup="thanks"]')
const thanksPopup = new Popup(thanksPopupEl)
const applicationPopupEl = document.querySelector('.js-popup[data-popup="application"]')
const applicationPopup = new Popup(applicationPopupEl)
header.Init(html);

if(showPopupButtons){
  showPopupButtons.forEach(loopButton => {
    loopButton.addEventListener('click', (e) => {
      switch (loopButton.dataset.popup){
        case 'thanks':
          thanksPopup.showPopup(e);
          break;
        case 'application':
          applicationPopup.showPopup(e);
          break;
      }
    })
  })
}

// animation

let scrollItems = document.querySelectorAll('._anim-item')

if (scrollItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let i = 0; i < scrollItems.length; i++) {
      const scrollItem = scrollItems[i]
      const scrollItemHeight = scrollItem.offsetHeight
      const scrollItemOffset = offset(scrollItem).top
      const animStart = 5

      let scrollItemPoint = window.innerHeight - scrollItemHeight / animStart
      if (scrollItemHeight > window.innerHeight) {
        scrollItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > scrollItemOffset - scrollItemPoint) && pageYOffset < (scrollItemOffset + scrollItemHeight)) {
        scrollItem.classList.add('animate')
      } else {
        if (!scrollItem.classList.contains('no-hide')) {
          scrollItem.classList.remove('animate')
        }

      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll()

  }, 300)
}
