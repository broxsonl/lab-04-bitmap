'use strict';

const assert = require('assert');
const Greenscaler = require('../model/greenscale-constructor.js');
const bitmapFileHelper = require('../lib/bitmapFileHelper.js');


describe('Greenscaler', function(){
  describe('#turnGreen', function(){
    it('should ensure Greenscaler is running', function(done){
      bitmapFileHelper.turnGreen(Greenscaler);
      assert.ok(Greenscaler);
      console.log(Greenscaler);
      done();
    });
  });
});
