'use strict';

const fs = require('fs');

// const bitmapFileHelper = require('../lib/bitmapFileHelper');

module.exports = exports = {};

exports.turnGreen = function(buf, file) {
  var colorArray;
  colorArray = buf.slice(54, 1078);

  var currentColor;

  for (var i = 0;i <= 1024;i += 4){
    currentColor = colorArray.slice(i, i+4);
    console.log('B' + currentColor[0] + ' + ' + 'G' + currentColor[1] + ' + ' + 'R' + currentColor[2] + ' + ' + 'A' + currentColor[3]);
    currentColor[0] = 0;
    currentColor[1] = 255;
    currentColor[2] = 0;
    currentColor[3] = 0;
  }
};
