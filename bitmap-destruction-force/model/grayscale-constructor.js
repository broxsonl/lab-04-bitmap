'use strict';

const fs = require('fs');

module.exports = exports = {};
//const bitmapFileHelper = require('../lib/bitmapFileHelper.js')

const Transformer = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
}


Transformer.prototype.turnGreen = function(buf){
  console.log('fourth');
  console.log(buf);
  var currentColor;
    for (var i = 0;i < 1024;i += 4){
      currentColor = this.colorArray.slice(i, i+4);
     //console.log('B' + currentColor[0] + ' + ' + 'G' + currentColor[1] + ' + ' + 'R' + currentColor[2] + ' + ' + 'A' + currentColor[3]);
      currentColor[0] = 255;
      currentColor[1] = 0;
      currentColor[2] = 0;
      currentColor[3] = 0;
    }
}

module.exports = function greenDuck(buf){
  console.log('third');
  console.log(buf);
  var ducks = new Transformer(buf);
  ducks.invertColor(buf);

}
