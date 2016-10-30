const express = require('express');
const models = require('../../models');

module.exports = (modelName, options) => {
  const opts = options || {};

  const router = new express.Router();

  if (!models[modelName]) {
    throw new Error('Invalid model name');
  }

  router.get('/:id', (req, res) => {
    console.log('models', models[modelName]);
    models[modelName]
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
    models[modelName]
      .create(req.body, opts.post)
      .then(data => res.send(data))
      .catch((err) => res.status(500).send(err));
  });

  router.delete('/:id', (req, res) => {
    models[modelName]
      .delete(req.params.id, opts.delete)
      .then(() => res.send())
      .catch(() => res.status(500).send());
  });

  router.put('/:id', (req, res) => {
    models[modelName]
      .upsert(Object.assign(req.params, req.body), opts.put)
      .then(data => res.send(data))
      .catch(() => res.status(500).send());
  });

  return router;
};
