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

  router.get('/:id', async (req, res) => {
    try {
      const data = await model[modelName].findById(req.params.id, opts.get);
      return !data ? res.status(404).send() : res.send(data);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  });

  router.post('/', async (req, res) => {
    try {
      const data = await model[modelName].create(req.body, opts.post)
      return res.send(data);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await model[modelName].delete(req.params.id, opts.delete);
      return res.send();
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const data = model[modelName].upsert({ ...req.params, ...req.body}, opts.put);
      return res.send(data);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  });

  return router;
};
