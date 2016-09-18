'use strict';

const bitmapFileHelper = require('../lib/bitmapFileHelper.js');
const assert = require('assert');

describe('bitmapFileHelper', function(){
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
  });
});
