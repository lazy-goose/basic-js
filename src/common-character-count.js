/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let m1 = {}
    let m2 = {}
    let count = 0
    for (let c of s1) m1[c] = m1[c] ? m1[c]+1 : 1
    for (let c of s2) m2[c] = m2[c] ? m2[c]+1 : 1
    for (let c of Object.keys(m1)) if (m2[c]) count += Math.min(m1[c], m2[c])
    return count
}

module.exports = {
  getCommonCharacterCount
}
