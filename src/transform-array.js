/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(toCopy) {
  if (!Array.isArray(toCopy)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const arr = [...toCopy]
  const isCommand = (el) => [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
    '--discard'
  ].includes(el)

  return arr.reduce((arr, _, i) => {
    if (isCommand(arr[i])) return arr

    if (arr[i - 1] === '--discard-next')
      arr.splice(i - 1, 2, '--discard')
    if (arr[i - 1] === '--double-next')
      arr.splice(i - 1, 2, arr[i], arr[i])

    if (arr[i + 1] === '--discard-prev')
      arr.splice(i, 2, '--discard')
    if (arr[i + 1] === '--double-prev')
      arr.splice(i, 2, arr[i], arr[i])

    return arr
  }, arr).filter(el => !isCommand(el))
}

module.exports = {
  transform
}
