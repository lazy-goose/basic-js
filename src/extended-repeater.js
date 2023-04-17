/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, options) {
  let {
    repeatTimes = 1, separator = "+", addition = '',
    additionRepeatTimes = 1, additionSeparator = "|"
  } = options;

  string = String(string);
  repeatTimes = Number(repeatTimes);
  separator = String(separator);
  addition = String(addition);
  additionRepeatTimes = Number(additionRepeatTimes);
  additionSeparator = String(additionSeparator);

  return Array.from({ length: repeatTimes }).map(() =>
    string +
    Array.from({ length: additionRepeatTimes })
      .map(() => addition).join(additionSeparator)
  ).join(separator);
}

module.exports = {
  repeater
}
