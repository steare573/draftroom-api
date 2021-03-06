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
    .League
    .findById(req.params.id, {
      include: [
        models.Team,
        models.Draft,
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

export default router;
