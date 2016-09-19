'use strict';

const fs = require('fs');
var buf;
module.exports = exports = {};

exports.turnGreen = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('bitmap buffer not acquired');
    buf = data;
    callback(buf);
    fs.writeFile(`${__dirname}/../transformed-assets/greenscale-bitmap.bmp`, buf);
  });
};

exports.invertColor = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('bitmap buffer not acquired');
    buf = data;
    callback(buf);
    fs.writeFile(`${__dirname}/../transformed-assets/inverted-bitmap.bmp`, buf);
  });
};

exports.grayScale = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    if(err) throw new Error('bitmap buffer not acquired');
    buf = data;
    callback(buf);
    fs.writeFile(`${__dirname}/../transformed-assets/grayscale-bitmap.bmp`, buf);
  });
};
