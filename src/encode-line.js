/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  let result = ''
  for (let i = 0, counter = 1; i <= s.length; i++) {
    if (s[i] === s[i + 1]) {
      counter++
    } else {
      if (counter < 2) { 
        result += s[i]
      } else {
        result += counter + s[i]
        counter = 1
      }
    }
  }
  return result
}

module.exports = {
  encodeLine
}
