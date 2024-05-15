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
