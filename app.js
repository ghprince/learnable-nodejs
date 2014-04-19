'use strict';

var http = require('http');

var mappings = require('./mappings');

var server = http.createServer(function (req, res) {
  var mapping = mappings.get(req.url);

  if (!mapping) {
    res.writeHead(404);
    return res.end();
  }

  res.writeHead(302, { location: mapping });
  res.end();
});

server.listen(3000);
