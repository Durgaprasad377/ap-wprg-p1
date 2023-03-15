const express = require('express');
const logger = require('morgan');
const menuItemRouter = require('./routes/menu-item');

require('./models').init();

const app = express();
const enableCors = (req, resp, next) => {
  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
};

app.use(logger('dev'));
app.use(enableCors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/menu-items', menuItemRouter);

module.exports = app;
