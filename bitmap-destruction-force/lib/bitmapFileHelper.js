'use strict';

const fs = require('fs');

module.exports = exports = {};

var buf;

exports.turnGreen = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    buf = data;
    callback(buf);
    fs.writeFile('./green-bitmap.bmp', buf);
  });
};

exports.invertColor = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    buf = data;
    callback(buf);
    fs.writeFile('./inverted-bitmap.bmp', buf);
  });
};

exports.grayScale = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    buf = data;
    callback(buf);
    fs.writeFile('./grayscale-bitmap.bmp', buf);
  });
};
