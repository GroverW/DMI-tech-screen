const { RESULTS_PER_PAGE, db } = require('../config');

/** Related functions for strings. */

class String {
  /**
   * findAll
   *
   * expects:
   * - start => start index
   * - count => number of results
   *
   * returns:
   * - [string, ...]
   */
  static findAll(start, count = RESULTS_PER_PAGE) {
    const startIdx = Math.min(db.length, start);
    const endIdx = Math.min(db.length, start + count);

    return db.slice(startIdx, endIdx);
  }

  /**
   * create
   *
   * expects:
   * - data (string)
   *
   * returns:
   * - { id, text }
   */
  static create(data) {
    const newString = { id: db.length, text: data };

    db.unshift(newString);

    return newString;
  }
}

module.exports = String;
