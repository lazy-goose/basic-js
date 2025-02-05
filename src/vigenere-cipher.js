/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  ASCII_A = 97;
  ASCII_Z = 122;
  ALPHABET_LENGTH = 
  this.ASCII_Z + 1 - this.ASCII_A;

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  isError(string = '', string_2 = '', number = 1) {
    if (typeof string !== "string") throw new Error();
    if (typeof string_2 !== "string") throw new Error();
    if (typeof number !== "number") throw new Error();
  }
  inAlphabet(pos, offset = 0) {
    if (
      pos > this.ALPHABET_LENGTH + offset ||
      pos < 1 - offset
    ) throw new Error();
  }
  getAlphabetPosition(sym) {
    if (typeof sym !== "string" || sym.length > 1) return null;
    let code = sym.toLowerCase().charCodeAt(0);
    if (code < this.ASCII_A || code > this.ASCII_Z) return null;
    return code + 1 - this.ASCII_A;
  }
  getAlphabetSym(pos) {
    this.isError('', '', pos);
    this.inAlphabet(pos);
    return String.fromCharCode(pos - 1 + this.ASCII_A);
  }
  normalizeAlphabet(pos) {
    this.isError('', '', pos);
    this.inAlphabet(pos, this.ALPHABET_LENGTH);
    while (pos > this.ALPHABET_LENGTH) pos -= this.ALPHABET_LENGTH;
    while (pos < 1) pos += this.ALPHABET_LENGTH;
    return pos;
  }
  numberLooper(maxNum) {
    this.isError('', '', maxNum);
    function *generator(maxNum) {
      let currentNumber = 0;
      while (true) {
        if (currentNumber > maxNum) currentNumber = 0;
        yield currentNumber++;
      } 
    } return generator(maxNum);
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!")
    }
    this.isError(string, key);
    let keyLooper = this.numberLooper(key.length - 1);
    let encryptedCharsArray = [...string].map(char => {
      if (!this.getAlphabetPosition(char)) return char;
      let keyIndex = keyLooper.next().value;
      let charAlphabetPos = this.getAlphabetPosition(char);
      let keyAlphabetPos = this.getAlphabetPosition(key[keyIndex]);
      let normalized = this.normalizeAlphabet(charAlphabetPos + keyAlphabetPos - 1);
      return this.getAlphabetSym(normalized).toUpperCase();
    });
    if (this.isDirect) return encryptedCharsArray.join('');
      else return encryptedCharsArray.reverse().join('');
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!")
    }
    this.isError(string, key);
    let keyLooper = this.numberLooper(key.length - 1);
    let decryptedCharsArray = [...string].map(char => {
      if (!this.getAlphabetPosition(char)) return char;
      let keyIndex = keyLooper.next().value;
      let charAlphabetPos = this.getAlphabetPosition(char);
      let keyAlphabetPos = this.getAlphabetPosition(key[keyIndex]);
      let normalized = this.normalizeAlphabet(charAlphabetPos - keyAlphabetPos + 1);
      return this.getAlphabetSym(normalized).toUpperCase();
    });
    if (this.isDirect) return decryptedCharsArray.join('');
      else return decryptedCharsArray.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
}
