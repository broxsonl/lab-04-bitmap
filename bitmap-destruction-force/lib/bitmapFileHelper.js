'use strict';

const fs = require('fs');

const buf = fs.readFileSync('../../assets/bitmap.bmp');

console.log(buf);

//Starts where the colorArray begins
console.log(buf.readUInt32LE(54));

// console.log(buf.toString());
