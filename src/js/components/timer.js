let daysVal, hoursVal, minutesVal, secondsVal, daysText, hoursText, minutesText, secondsText, endDate
const timers = document.querySelectorAll('[data-timer]')

const timeCount = () => {
  timers.forEach(el => {
    daysVal = el.querySelector('[data-days] .timer__val'),
    hoursVal = el.querySelector('[data-hours] .timer__val'),
    minutesVal = el.querySelector('[data-minutes] .timer__val'),
    secondsVal = el.querySelector('[data-seconds] .timer__val');

    daysText = el.querySelector('[data-days] .timer__text'),
    hoursText = el.querySelector('[data-hours] .timer__text'),
    minutesText = el.querySelector('[data-minutes] .timer__text'),
    secondsText = el.querySelector('[data-seconds] .timer__text');

    endDate = new Date(el.dataset.time)

    function count() {
      let todayDate = new Date()
      let leftTime = endDate - todayDate

      let leftDays = leftTime > 0 ? (Math.floor(leftTime / 1000 / 60 / 60 / 24)) : 0
      let leftHours = leftTime > 0 ? (Math.floor(leftTime / 1000 / 60 / 60) % 24) : 0
      let leftMinutes = leftTime > 0 ? (Math.floor(leftTime / 1000 / 60) % 24): 0
      let leftSeconds = leftTime > 0 ? (Math.floor(leftTime / 1000) % 60) : 0

      daysVal.textContent = addZeroWithNumber(leftDays)
      hoursVal.textContent = addZeroWithNumber(leftHours)
      minutesVal.textContent = addZeroWithNumber(leftMinutes)
      secondsVal.textContent = addZeroWithNumber(leftSeconds)

      daysText.textContent = declOfNum(leftDays, ['день', 'дня', 'дней']);
      hoursText.textContent = declOfNum(leftHours, ['час', 'часа', 'часов']);
      minutesText.textContent = declOfNum(leftMinutes, ['минута', 'минуты', 'минут']);
      secondsText.textContent = declOfNum(leftSeconds, ['секунда', 'секунды', 'секунд']);
    }

    count()
  })
}

setInterval(timeCount, 1000)

function declOfNum(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function addZeroWithNumber(number) {
  if (number < 10) {
    return `0${number}`
  } else {
    return `${number}`
  }
}
