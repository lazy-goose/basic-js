/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let w = matrix[0].length
  let h = matrix.length

  let mx = 
    matrix.map(() => Array.from({length:w}))

  function countAround(r, c) {
    let counter = 0
    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (matrix?.at(i)?.at(j) === true) {
          counter++
        }
      }
    }
    return counter
  }

  for (i = 0; i < h; i++) {
    for (j = 0; j < w; j++) {
      if (matrix[i][j] === false) {
        mx[i][j] = countAround(i, j)
      } else {
        mx[i][j] = 1
      }
    }
  }

  return mx
}

module.exports = {
  minesweeper
}
