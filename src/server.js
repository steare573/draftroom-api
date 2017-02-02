/**
 * Express HTTP server and entry point into the app.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2017-02-01
 */
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import registerRoutes from './lib/registerRoutes';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
registerRoutes(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
