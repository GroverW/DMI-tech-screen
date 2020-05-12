const { body, query, validationResult } = require('express-validator');

/**
 * get query param 'start' should:
 * - exist
 * - be an Integer >= 0
 */
const getStringsValidationRules = () => [
  query('start')
    .exists()
    .withMessage('Start is required.')
    .isInt({ min: 0 })
    .withMessage('Start must be a positive integer or 0.'),
];

/**
 * post data should:
 * - exist
 * - be of length >= 1 and <= 300
 */
const postStringValidationRules = () => [
  body('data')
    .exists()
    .withMessage('String is required.')
    .trim()
    .isLength({ min: 1, max: 300 })
    .withMessage('String must be between 1 and 300 characters.')
    .escape(),
];

/**
 * validate
 * gathers validation errors and maps them
 * to array
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  const errorList = [];

  errors.array().forEach(error => errorList.push(error.msg));

  return next({
    status: 400,
    message: errorList,
  });
};

module.exports = {
  getStringsValidationRules,
  postStringValidationRules,
  validate,
};
