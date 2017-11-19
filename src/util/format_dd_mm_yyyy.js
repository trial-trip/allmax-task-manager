// accepts an Int and returns dd.mm.yyyy
const format_dd_mm_yyyy = (n) => {
  const tempDate = new Date(n)
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



export default format_dd_mm_yyyy
