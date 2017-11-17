// accepts an ISO string and returns dd.mm.yyyy
const formattedDate = (dateIsoString) => {
  const tempDate = new Date(Date.parse(dateIsoString))
  let dd = tempDate.getDate()
  if (dd < 10) {
    dd = '0' + dd
  }
  let mm = tempDate.getMonth() + 1
  if (mm < 10) {
    mm = '0' + mm
  }
  let yyyy = tempDate.getFullYear()
  if (yyyy < 10) {
    yyyy = '0' + yyyy
  }
  const answer = (dd + mm + yyyy) ? (dd + '.' + mm + '.' + yyyy) : ''
  return answer
}

export default formattedDate