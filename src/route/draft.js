/**
 * Route overrides for fetching team with dependencies populated
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2017-02-01
 */
import express from 'express';
import models from '../model';

const router = new express.Router();

router.get('/:id', (req, res) => {
  models
    .Draft
    .findById(req.params.id, {
      include: [
        models.Season,
        {
          model: models.League,
          include: [models.Team],
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
      console.log('my err', err.message);
      res.status(500).send(err.message);
    });
});

export default router;
