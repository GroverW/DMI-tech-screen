const { body, query, validationResult } = require('express-validator');

const getStringsValidationRules = () => [
  query('start')
    .exists()
    .withMessage('Start is required.')
    .isInt({ min: 0 })
    .withMessage('Start must be a positive integer or 0.'),
];

const postStringValidationRules = () => [
  body('data')
    .exists()
    .withMessage('String is required.')
    .trim()
    .isLength({ min: 1, max: 300 })
    .withMessage('String must be between 1 and 300 characters.')
    .escape(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  const errorList = [];

  errors.array().forEach(error => errorList.push({ [error.param]: error.msg }));

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
