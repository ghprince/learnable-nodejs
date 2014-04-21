'use strict';

var http = require('http');

var connect = require('connect');

var mappings = require('./data/mappings'),
    logger = require('./logger');

var app = connect();

app.use(logger('Redirector'));

app.use(function (req, res) {
  mappings.get(req.url, function (err, mapping) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }

    res.writeHead(302, { location: mapping });
    res.end();

  });
});

http.createServer(app).listen(3000);
