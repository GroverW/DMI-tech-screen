/** Shared config for application. */

const RESULTS_PER_PAGE = 25;

const db = new Array(115).fill(0).map((v, i) => ({
  id: i + 1,
  text: `This is string ${i + 1}`,
}));

module.exports = {
  RESULTS_PER_PAGE,
  db,
};
