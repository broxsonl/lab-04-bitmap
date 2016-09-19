'use strict';

module.exports = exports = {};

exports.greenScale = function(buf){
  var duck = new exports.GreenScaler(buf);
  duck.turnGreen(buf);
};

exports.GreenScaler = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
};

exports.GreenScaler.prototype.turnGreen = function(){
  var currentColor;
  for (var i = 0;i < 1024;i += 4){
    currentColor = this.colorArray.slice(i, i+4);
    var currentColorAverage = ((currentColor[0] + currentColor[1] + currentColor[2])/3);
    currentColor[0] = 0;
    currentColor[1] = currentColorAverage;
    currentColor[2] = 0;
    currentColor[3] = 0;
  }
};
