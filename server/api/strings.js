/** Routes for strings. */

const express = require('express');
const router = express.Router({ mergeParams: true });

const String = require('../models/string');
const { getPageStart } = require('../utils/helpers');

/** GET / => [string, ...] */

router.get('/', async (req, res, next) => {
  try {
    const { page } = req.query;
    const start = getPageStart(page);

    const strings = String.findAll(start);

    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

/** POST / string */

router.post('/new', async (req, res, next) => {
  try {
    const { data } = req.body;

    const string = data && String.create(data);

    return res.status(201).json({ string });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
