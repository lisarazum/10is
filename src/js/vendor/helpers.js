export const urlToString = (url) => {
  url = url.replace(/^https?:\/\//, '')
  if (url.includes('/')) {
    url = url.substring(0, url.indexOf('/'))
  }
  return url
}

export const stringToUrl = (url) => {
  return url.startsWith('http://') || url.startsWith('https://')
    ? url
    : 'https://' + url
}

export const formatDateToMonthYear = (date) => {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    year: 'numeric',
  })
  return formattedDate.slice(0, -3)
}
