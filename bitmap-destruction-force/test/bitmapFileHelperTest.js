'use strict';

const bitmapFileHelper = require('../lib/bitmapFileHelper.js');
const assert = require('assert');

describe('testing bitmapFileHelper', function(){
  describe('#turnGreen', function(){
    it('should return buffer data', function(done){
      bitmapFileHelper.turnGreen(function(buf){
        assert.ok(buf, 'is not buffer data');
        done();
      });
    });
  });
  describe('#invertColor', function(){
    it('should return buffer data', function(done){
      bitmapFileHelper.invertColor(function(buf){
        assert.ok(buf, 'is not buffer data');
        done();
      });
    });
  });
  describe('#grayScale', function(){
    it('should return buffer data', function(done){
      bitmapFileHelper.grayScale(function(buf){
        assert.ok(buf, 'is not buffer data');
        done();
      });
    });
    it('should be a valid filename', function() {
      bitmapFileHelper.turnGreen([`${__dirname}/dont-exist.bmp`], function(err){
        assert.ifError(err);
      });
    });
  });
});
