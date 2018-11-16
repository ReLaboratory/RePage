const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

//connect db & set promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.dbLink, { useNewUrlParser: true });

app.use(logger('common', { stream: fs.createWriteStream('re-page.log', { flags: 'w' }) }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/edu', require('./routes/education'));

module.exports = app;
