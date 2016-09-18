'use strict';

const fs = require('fs');
var buf;
module.exports = exports = {};

exports.turnGreen = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('bitmap buffer not acquired');
    buf = data;
    callback(buf);
    fs.writeFile('./green-bitmap.bmp', buf);
  });
};

exports.invertColor = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('bitmap buffer not acquired');
    buf = data;
    callback(buf);
    fs.writeFile('./inverted-bitmap.bmp', buf);
  });
};

exports.grayScale = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('bitmap buffer not acquired');
    buf = data;
    callback(buf);
    fs.writeFile('./grayscale-bitmap.bmp', buf);
  });
};
