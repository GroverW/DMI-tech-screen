/** Routes for strings. */

const express = require('express');
const router = express.Router({ mergeParams: true });

const String = require('../models/string');
const { sleep } = require('../utils/helpers');
const {
  getStringsValidationRules,
  postStringValidationRules,
  validate,
} = require('../middlewares/stringsValidationMiddlewares');

/** GET / => [string, ...] */

router.get(
  '/',
  getStringsValidationRules(),
  validate,
  async (req, res, next) => {
    try {
      await sleep(1000);

      const strings = String.findAll(+req.query.start);

      return res.json({ strings });
    } catch (err) {
      return next({
        status: 500,
        message: 'Something went wrong. Please try again later',
      });
    }
  },
);

/** POST / string */

router.post(
  '/new',
  postStringValidationRules(),
  validate,
  async (req, res, next) => {
    try {
      await sleep(1000);

      const string = String.create(req.body.data);

      return res.status(201).json({ string });
    } catch (err) {
      return next({
        status: 500,
        message: 'Something went wrong. Please try again later',
      });
    }
  },
);

module.exports = router;
