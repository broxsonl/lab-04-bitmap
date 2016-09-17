'use strict';

const fs = require('fs');

//const buf = fs.readFileSync('../../assets/bitmap.bmp');

const Transformer = require('./model/bitmapConstructor.js');

const bitmapFileHelper = require('./lib/bitmapFileHelper.js');

console.log('first');

bitmapFileHelper(Transformer);

// call the readSync to get the file and then have the properties to output to
// call the constructor and have the properties to output to
// call the write to write the resulting thing
//attach function to module

// readfile(greenDuck)
//greenDuck = function(buf) {
//
//}
