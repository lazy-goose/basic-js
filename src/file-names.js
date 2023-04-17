/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let count = {}
  return names.map(n => {
    let newname

    if (n in count) {
      newname = `${n}(${count[n]})`
      count[n] += 1
      count[newname] = 1
    } else {
      count[n] = 1
      newname = n
    }

    return newname
  })
}

module.exports = {
  renameFiles
}
