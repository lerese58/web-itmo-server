const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const favoritesRouter = require('./routes/favorites');
const weatherRouter = require('./routes/weather');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/favorites/', favoritesRouter);
app.use('/weather/', weatherRouter);

app.listen(8088)


module.exports = app;
