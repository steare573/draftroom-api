const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const registerRoutes = require('./lib/registerRoutes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
registerRoutes(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
