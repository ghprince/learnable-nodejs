'use strict';

var http = require('http'),
    path = require('path');

var express = require('express');

var mappings = require('./data/mappings'),
    logger = require('./logger');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('Redirector'));

app.get('/', function (req, res) {
  res.render("index", {
    mappings: "Hello world from EJS!"
  })
});

app.get('/:alias', function (req, res) {
  mappings.get(req.params.alias, function (err, mapping) {
    if (err) { return res.send(404); }
    res.redirect(mapping);
  });
});

http.createServer(app).listen(3000);
