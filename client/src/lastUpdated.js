const lastUpdated = (dataString) => {
  let dateArr = dataString.split('T')[0].split('-')
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let monthString = months[Number(dateArr[1]-1)]
  return `${monthString} ${Number(dateArr[2])}, ${dateArr[0]}`
}

module.exports = lastUpdated