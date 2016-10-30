const express = require('express');
const router = new express.Router();
const models = require('../models');

router.get('/:id', (req, res) => {
  models
    .Draft
    .findById(req.params.id, {
      include: [
        models.Season,
        models.League,
      ],
    })
    .then((data) => {
      if (!data) {
        res.status(404).send();
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      console.log('my error', err);
      res.status(500).send(err);
    });
});

module.exports = router;
