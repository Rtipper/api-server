'use strict';

// 3RD PARTY DEPENDENCIES
const express = require('express');
const app = express();

// INTERNAL MODULES
const notFound = require('./error-handlers/404.js');
const error = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require ('./middleware/validator.js');

// FOOD + CLOTHES
const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');

// INTERNAL CONSTANTS
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use(validator);
app.use(foodRoutes);
app.use(clothesRoutes);

app.use('*', notFound);
app.use(error);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  }
}