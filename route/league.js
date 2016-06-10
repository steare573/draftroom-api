const express = require('express');
const router = new express.Router();
const models = require('../models');

router.get('/:id', (req, res) => {
  models
    .League
    .findById(req.params.id, {
      include: [
        {
          model: models.Team,
        },
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
      res.status(500).send(err);
    });
});

module.exports = router;
