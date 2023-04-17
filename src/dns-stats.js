/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains
    .map(dg => dg.split('.').reverse().map(d => '.' + d))
    .map(dg => dg.map((_, i) => dg.slice(0, i + 1).join('')))
    .flat()
    .reduce((a, d) => ({...a, [d]: a[d] === undefined ? 1 : a[d] + 1}), {})
}

module.exports = {
  getDNSStats
}
