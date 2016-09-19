'use strict';

module.exports = exports = {};

exports.grayScale = function(buf, err){
  if (err) throw new Error('Error grayscaling bitmap');
  var duck = new exports.GrayScale(buf);
  duck.grayScale(buf);
};

exports.GrayScale = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
};

exports.GrayScale.prototype.grayScale = function(){
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
