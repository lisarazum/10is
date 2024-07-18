const scheduleSection = document.querySelectorAll('.js-schedule-section')

if (scheduleSection.length > 0) {
  const courtsSchedule = document.querySelectorAll('.schedule-court__list')

  if (courtsSchedule) {
    for (let i = 0; i < courtsSchedule.length; i++) {
      const tableBtn = courtsSchedule[i].querySelectorAll('.schedule-court__item')
      const table = courtsSchedule[i].parentElement.querySelectorAll('.schedule-table')

      table.forEach(el => {
        el.classList.add('js-schedule-table')
      })

      createCourtList(0)
      function createCourtList(index) {
        tableBtn[index].classList.add('active')
        table[index].classList.add('active')

        tableBtn.forEach((el, index)=> {
          el.addEventListener('click', () => {
            clearActiveClass()
            el.classList.add('active')
            table[index].classList.add('active')

            const scheduleDay = table[index].querySelectorAll('.js-schedule-day')
            const scheduleTable= table[index].querySelectorAll('.js-schedule-content')

            scheduleDay[0].classList.add('active')
            scheduleTable[0].classList.add('active')
          })
        })

        function clearActiveClass() {
          tableBtn.forEach(el => {
            el.classList.remove('active')
          })

          table.forEach(el => {
            el.classList.remove('active')
          })
        }
      }
    }

  }

  for (let i = 0; i < scheduleSection.length; i++) {
    const scheduleDays = scheduleSection[i].querySelectorAll('.js-schedule-day')
    const scheduleContent = scheduleSection[i].querySelectorAll('.js-schedule-content')

    createScheduleList(0)

    function createScheduleList(index) {
      scheduleDays[index].classList.add('active')
      scheduleContent[index].classList.add('active')

      scheduleDays.forEach((el, index)=> {
        el.addEventListener('click', () => {
          clearActiveClass()
          el.classList.add('active')
          scheduleContent[index].classList.add('active')
        })
      })

      function clearActiveClass() {
        scheduleDays.forEach(el => {
          el.classList.remove('active')
        })

        scheduleContent.forEach(el => {
          el.classList.remove('active')
        })
      }
    }
  }
}


