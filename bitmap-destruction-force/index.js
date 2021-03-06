'use strict';

const bitmapFileHelper = require('./lib/bitmapFileHelper.js');

const Greenscaler = require('./model/greenscale-constructor.js');
const Inverter = require('./model/inverse-constructor.js');
const Grayscaler = require('./model/grayscale-constructor.js');

//Running node on index.js will produce three unique bitmaps with the function invocations below:
bitmapFileHelper.turnGreen(Greenscaler.greenScale); //Greenscales the bitmap
bitmapFileHelper.invertColor(Inverter.invert); //Inverts the colors of the bitmap
bitmapFileHelper.grayScale(Grayscaler.grayScale); //Grayscales the colors of the bitmap
