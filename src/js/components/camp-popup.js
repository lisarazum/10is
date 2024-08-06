function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  else return null;
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  expires = "; expires=" + date.toUTCString();
}
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

if (getCookie('visited') == 1) {
  // повторное посещение
} else {
  // первое посещение
  setCookie('visited', 1, 365);
  setTimeout(function () {
    document.querySelector('.camp-popup').classList.add('active')
  }, 300);
}

function campPopup() {
  const popup = document.querySelector('.js-camp-popup')
  const closePopup = popup.querySelector('.js-camp-popup-button')
  const cookiePopup = document.querySelector('.js-cookie-popup')
  const cookiePopupBtn = cookiePopup.querySelector('.cookie-popup__btn')

  cookiePopup.classList.add('active')
  cookiePopupBtn.addEventListener('click', () => {
    cookiePopup.classList.remove('active')
  })
  setCookie('cookieApprove', 1, 365);

  if (popup) {
    closePopup.addEventListener('click', () => {
      popup.classList.remove('active')
    })

    popup.addEventListener('click', (e) => {
      if (e.target.id !== popup.querySelector('.camp-popup__inner')) {
        popup.classList.remove('active')
      }
    })
  }
}

campPopup()
