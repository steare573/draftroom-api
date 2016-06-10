const baseRoutes = require('../route/crud');
const overrideRoutes = require('../route/overrides');
module.exports = (app) => {
  // note that we register our other routes before teh base routes so that we can override them
  // if necessary
  Object.keys(overrideRoutes).forEach(routeName => {
    app.use(`/${routeName}`, overrideRoutes[routeName]);
  });

  Object.keys(baseRoutes).forEach(routeName => {
    app.use(`/${routeName}`, baseRoutes[routeName]);
  });
};
