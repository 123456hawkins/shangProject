const getTime = () => {
  const hours = new Date().getHours()
  if (hours <= 9) {
    return '早上好'
  } else if (hours > 10 && hours <= 13) {
    return '中午好'
  } else if (hours > 14 && hours <= 18) {
    return '下午好'
  } else {
    return '晚上好'
  }
}
export default getTime
