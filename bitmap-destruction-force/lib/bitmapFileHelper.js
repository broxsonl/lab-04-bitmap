'use strict';

const fs = require('fs');

const Transformer = require('../model/bitmapConstructor.js');

//const buf = fs.readFileSync('../../assets/bitmap.bmp');

var buf;

module.exports = function(callback) {
  fs.readFile(`${__dirname}/../../assets/bitmap.bmp`, function(err, data){
    buf = data;
    console.log('buf',buf);
    console.log('second');
    callback(buf);
    fs.writeFile('./newfile.bmp', buf);
  });
}



//fs.writeFileSync('./newfile.bmp', buf);
