'use strict';

const Greenscaler = require('./model/greenscale-constructor.js');
const Inverter = require('./model/inverse-constructor.js');
const GrayScale = require('./model/grayscale-constructor.js');

const bitmapFileHelper = require('./lib/bitmapFileHelper.js');

bitmapFileHelper.turnGreen(Greenscaler);
bitmapFileHelper.invertColor(Inverter);
bitmapFileHelper.grayScale(GrayScale);
