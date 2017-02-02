/**
 * Route overrides for fetching user with their teams populated
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2017-02-01
 */
import express from 'express';
import model from '../model';
const router = new express.Router();

router.get('/:id', (req, res) => {
  model
    .User
    .findById(req.params.id, {
      include: [
        {
          model: model.Team,
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

export default router;
