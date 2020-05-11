const { RESULTS_PER_PAGE } = require('../config');

const db = new Array(115).fill(0).map((v, i) => ({
  id: i + 1,
  text: `This is string ${i + 1}`,
}));

/** Related functions for strings. */

class String {
  /**
   * findAll
   *
   * expects:
   * - start => start index
   * - count => number of results
   */
  static findAll(start, count = RESULTS_PER_PAGE) {
    const startIdx = Math.min(db.length, start);
    const endIdx = Math.min(db.length, start + count);

    return db.slice(startIdx, endIdx);
  }

  static create(data) {
    const newString = { id: db.length, text: data };

    db.unshift(newString);

    return newString;
  }
}

module.exports = String;
