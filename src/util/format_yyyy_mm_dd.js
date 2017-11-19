// accepts an Int and returns yyyy-mm-dd
const format_yyyy_mm_dd = (n) => {
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
  const answer = (dd + mm + yyyy) ? (yyyy + '-' + mm + '-' + dd) : ''
  return answer
}
export default format_yyyy_mm_dd

