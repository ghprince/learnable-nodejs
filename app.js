'use strict';

var http = require('http');

var mappings = require('./data/mappings');

var server = http.createServer(function (req, res) {
  mappings.get(req.url, function (err, mapping) {
    if (err) {
      res.writeHead(404);
      return res.end();
    }

    res.writeHead(302, { location: mapping });
    res.end();

  });
});

server.listen(3000);
