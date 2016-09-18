'use strict';

const Transformer = require('./model/bitmapConstructor.js');
const Inverter = require('./model/inverse-constructor.js');
const GrayScale = require('./model/grayscale-constructor.js');

const bitmapFileHelper = require('./lib/bitmapFileHelper.js');

bitmapFileHelper.turnGreen(Transformer);
bitmapFileHelper.invertColor(Inverter);
bitmapFileHelper.grayScale(GrayScale);
