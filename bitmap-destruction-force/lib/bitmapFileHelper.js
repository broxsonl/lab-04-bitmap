'use strict';

const fs = require('fs');

const Transformer = require('../model/bitmapConstructor.js');

module.exports = exports = {};

//const buf = fs.readFileSync('../../assets/bitmap.bmp');

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


//fs.writeFileSync('./newfile.bmp', buf);
