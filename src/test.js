/**
 * @Author JohnLi
 * @Date 2018/5/23 20:29
 */
function typeCheck (value) {
  if (typeof value === 'number') {
    return 'number'
  } else if (typeof value === 'string') {
    return 'string'
  }
}
function isString (str) {
  return typeof str === 'string'
}
export {
  typeCheck,
  isString
}
