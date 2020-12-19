const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const favoritesRouter = require('./routes/favorites');
const weatherRouter = require('./routes/weather');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret key'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/favorites/', favoritesRouter);
app.use('/weather/', weatherRouter);

app.listen(8088)


module.exports = app;
