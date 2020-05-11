/** Routes for strings. */

const express = require('express');
const router = express.Router({ mergeParams: true });

const String = require('../models/string');

/** GET / => [string, ...] */

router.get('/', async (req, res, next) => {
  try {
    const { start } = req.query;

    if (!start || !Number.isInteger(+start)) {
      return res.status(400).json({ error: 'you messed up' });
    }

    const strings = String.findAll(+start);

    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

/** POST / string */

router.post('/new', async (req, res, next) => {
  try {
    // const { data } = req.body;

    return res.status(400).json({ error: 'sorry that did not work.' });

    // const string = data && String.create(data);

    // return res.status(201).json({ string });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
