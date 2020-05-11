const { RESULTS_PER_PAGE } = require('../config');

const getPageStart = page =>
  page && Number.isInteger(+page)
    ? Math.max(page - 1, 0) * RESULTS_PER_PAGE
    : 0;

module.exports = {
  getPageStart,
};
