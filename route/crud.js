// Note that these are not likely the primary routes we'll use...i just wanted a quick and
// dirty way to do simple one to one apis to db tables.
const models = require('../models');
const routeObj = {};
const lowerFirst = require('lodash.lowerfirst');
const generateBaseRoutes = require('./util/generateBaseRoutes');

Object.keys(models).forEach(modelName => {
  routeObj[lowerFirst(modelName).replace('_', '')] = generateBaseRoutes(modelName);
});

module.exports = routeObj;
