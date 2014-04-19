'use strict';

var data = {
  g: 'http://www.google.com',
  a: 'http://www.amazon.com'
};

var mappings = {
  get: function (url) {
    var alias = url.substring(1);

    if (!data[alias]) {
      return undefined;
    }

    return data[alias];
  }
};

module.exports = mappings;
