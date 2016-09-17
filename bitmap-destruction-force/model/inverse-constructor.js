'use strict';

const fs = require('fs');

module.exports = exports = {};
//const bitmapFileHelper = require('../lib/bitmapFileHelper.js')

const Inverter = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
}


Inverter.prototype.invertColor = function(buf){
  var currentColor;
    for (var i = 0;i < 1024;i += 4){
      currentColor = this.colorArray.slice(i, i+4);
     //console.log('B' + currentColor[0] + ' + ' + 'G' + currentColor[1] + ' + ' + 'R' + currentColor[2] + ' + ' + 'A' + currentColor[3]);
      currentColor[0] = 255 - currentColor[0];
      currentColor[1] = 255 - currentColor[1];
      currentColor[2] = 255 - currentColor[2];
      currentColor[3] = 0;
    }
}

module.exports = function invertDuck(buf){
  var duck = new Inverter(buf);
  duck.invertColor(buf);

}
