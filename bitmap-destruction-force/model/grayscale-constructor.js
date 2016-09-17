'use strict';

const fs = require('fs');

module.exports = exports = {};
//const bitmapFileHelper = require('../lib/bitmapFileHelper.js')

const GrayScale = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
}


GrayScale.prototype.grayScale = function(buf){
  var currentColor;
    for (var i = 0;i < 1024;i += 4){
      currentColor = this.colorArray.slice(i, i+4);
      currentColor[0] = 0;
      currentColor[1] = 0;
      currentColor[2] = 255;
      currentColor[3] = 0;
    }
}

module.exports = function grayScale(buf){
  var duck = new GrayScale(buf);
  duck.grayScale(buf);

}
