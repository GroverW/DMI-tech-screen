const { RESULTS_PER_PAGE } = require('../config');

let db = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
db = new Array(115).fill(0).map((v, i) => i + 1);

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
    db.unshift(data);

    return data;
  }
}

module.exports = String;
