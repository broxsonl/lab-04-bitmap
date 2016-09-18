'use strict';

module.exports = function grayScale(buf){
  var duck = new GrayScale(buf);
  duck.grayScale(buf);
};

const GrayScale = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
};

GrayScale.prototype.grayScale = function(){
  var currentColor;
  for (var i = 0;i < 1024;i += 4){
    currentColor = this.colorArray.slice(i, i+4);
    var currentColorAverage = ((currentColor[0] + currentColor[1] + currentColor[2])/3);
    currentColor[0] = currentColorAverage;
    currentColor[1] = currentColorAverage;
    currentColor[2] = currentColorAverage;
    currentColor[3] = 0;
  }
};
