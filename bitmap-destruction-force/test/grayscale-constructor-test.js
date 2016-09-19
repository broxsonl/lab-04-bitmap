'use strict';

const assert = require('assert');
const Grayscaler = require('../model/grayscale-constructor.js');
const bitmapFileHelper = require('../lib/bitmapFileHelper.js');


describe('Grayscaler', function(){
  describe('#grayscale', function(){
    it('should ensure Grayscaler is running', function(done){
      bitmapFileHelper.grayScale(Grayscaler);
      assert.ok(Grayscaler);
      done();
    });
    it('should give the filesize of the bitmap', function(done) {
      assert.ok(Grayscaler.Grayscale.filesize);
      done();
    });
  });
});
