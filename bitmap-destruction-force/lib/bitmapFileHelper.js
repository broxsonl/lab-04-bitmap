'use strict';

const fs = require('fs');

const buf = fs.readFileSync('../../assets/bitmap.bmp');

fs.writeFileSync('./newfile.bmp', buf);
