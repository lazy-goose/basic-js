/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainedLinks: [],

  getLength() {
    return this.chainedLinks.length;
  },
  addLink(value = "") {
    this.chainedLinks.push(value);
    return this;
  },
  removeLink(position) {
    if (!position || position < 1 || position > this.getLength() || Number(position) !== position) {
      this.chainedLinks = []
      throw new Error("You can't remove incorrect link!")
    } 
    this.chainedLinks.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.chainedLinks.reverse();
    return this;
  },
  finishChain() {
    const linksToString = this.chainedLinks
      .map((value) => `( ${value} )`)
      .join("~~");
    this.chainedLinks = [];
    return linksToString;
  },
}

module.exports = {
  chainMaker
}
