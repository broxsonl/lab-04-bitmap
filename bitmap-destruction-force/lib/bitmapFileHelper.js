'use strict';

const fs = require('fs');

const buf = fs.readFileSync('../../assets/bitmap.bmp');

//Find file size
console.log('file size',(buf.readUInt32LE(2)) );

//Offset Starts here
console.log('pixel array offset(pixel array starts here)', buf.readUInt32LE(10));

//Color array size in bytes
console.log('size of color array in bytes (subtracting the header stuff)', (1078 - 54));

//Total number of indices in ColorArray
console.log('total number of colors in color array', ((1078 - 54)/4));

var colorArray;
colorArray = buf.slice(54, 1078);

var currentColor;

for (var i = 0; i < 1024;i += 4){
  currentColor = colorArray.slice(i, i+4);
  console.log('B' + currentColor[0] + ' + ' + 'G' + currentColor[1] + ' + ' + 'R' + currentColor[2] + ' + ' + 'A' + currentColor[3]);
  currentColor[0] = 10-i;
  currentColor[1] = 30-i;
  currentColor[2] = 84-i;
  currentColor[3] = 0;
}

fs.writeFileSync('./newfile.bmp', buf);
