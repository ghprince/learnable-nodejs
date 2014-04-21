'use strict';

var data = {
  g: 'http://www.google.com',
  a: 'http://www.amazon.com'
};

var mappings = {
  get: function (alias, callback) {
    if (!data[alias]) {
      return callback(new Error('URL not found.'));
    }

    return callback(null, data[alias]);
  }
};

module.exports = mappings;
