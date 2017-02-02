/**
 * Utility function for generating basic crud routes for a sequelice model.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2017-02-01
 */
import express from 'express';
import model from '../../model';

export default (modelName, options) => {
  const opts = options || {};

  const router = new express.Router();

  if (!model[modelName]) {
    throw new Error('Invalid model name');
  }

  router.get('/:id', (req, res) => {
    model[modelName]
      .findById(
        req.params.id,
        opts.get
      )
      .then((data) => {
        if (!data) {
          return res.status(404).send();
        }
        return res.send(data);
      })
      .catch(() => {
        res.status(500).send();
      });
  });

  router.post('/', (req, res) => {
    model[modelName]
      .create(req.body, opts.post)
      .then(data => res.send(data))
      .catch((err) => res.status(500).send(err));
  });

  router.delete('/:id', (req, res) => {
    model[modelName]
      .delete(req.params.id, opts.delete)
      .then(() => res.send())
      .catch(() => res.status(500).send());
  });

  router.put('/:id', (req, res) => {
    model[modelName]
      .upsert(Object.assign(req.params, req.body), opts.put)
      .then(data => res.send(data))
      .catch(() => res.status(500).send());
  });

  return router;
};
