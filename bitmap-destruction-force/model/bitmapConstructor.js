'use strict';

module.exports = function greenDuck(buf){
  var duck = new Transformer(buf);
  duck.turnGreen(buf);
};

const Transformer = function(buf){
  this.filesize = buf.readUInt32LE(2);
  this.offset = buf.readUInt32LE(10);
  this.colorArray = buf.slice(54, 1078);
};

Transformer.prototype.turnGreen = function(){
  var currentColor;
  for (var i = 0;i < 1024;i += 4){
    currentColor = this.colorArray.slice(i, i+4);
   //console.log('B' + currentColor[0] + ' + ' + 'G' + currentColor[1] + ' + ' + 'R' + currentColor[2] + ' + ' + 'A' + currentColor[3]);
    currentColor[0] = 0;
    currentColor[1] = 255;
    currentColor[2] = 0;
    currentColor[3] = 0;
  }
};
