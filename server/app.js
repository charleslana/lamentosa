const express = require('express');
const app = express();
const morgan = require('morgan');
const routeItems = require('./routes/items');
const routeInventory = require('./routes/inventory');

app.use(morgan('dev'));
app.use('/items', routeItems);
app.use('/inventory', routeInventory);

app.use((request, response, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  return response.send({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
