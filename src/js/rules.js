import './_global'

const rulesItemList = document.querySelectorAll('.rules-section__item')

if (rulesItemList.length > 0) {
  for (let i = 0; i < rulesItemList.length; i++) {
    let content = rulesItemList[i].innerHTML
    rulesItemList[i].innerHTML = ''
    console.log(content)
    let container = document.createElement('div')
    container.classList.add('container')
    container.innerHTML = content
    rulesItemList[i].append(container)
  }
}
