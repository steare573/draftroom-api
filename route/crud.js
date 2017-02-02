/**
 * Basic crud routes to register for each model to provide simple create/update/fetchById endpoints
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2017-02-01
 */
import models from '../model';
import lowerFirst from 'lodash.lowerfirst';
import generateBaseRoutes from './util/generateBaseRoutes';
const routeObj = {};

Object.keys(models).forEach(modelName => {
  routeObj[lowerFirst(modelName).replace('_', '')] = generateBaseRoutes(modelName);
});

export default routeObj;
