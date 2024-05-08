export default class Popup {
  constructor(el){
    this.element = el;
  }
  showPopup(e = null, button = null){
    if(e){
      e.preventDefault();
    }
    this.element.classList.add('loading');
    setTimeout(() => {
      this.element.classList.add('active');
      this.closePopup(this.element);
    }, 50)
  }
  closePopup(element) {
    function outsideClickListener(event) {
      const inner = element.querySelector('.js-popup-inner')
      if (event.target.classList.contains('close-button') || !inner.contains(event.target)) {
        element.classList.remove('active');
        setTimeout(() => {
          element.classList.remove('loading');
        }, 400);
        document.dispatchEvent(new CustomEvent('popup-close',{
          detail: {name: element.dataset.popup || 'popup'}
        }))
        document.removeEventListener('click', outsideClickListener);
      }
    }
    document.addEventListener('click', outsideClickListener);
  }
}
