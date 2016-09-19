'use strict';

const assert = require('assert');
const Inverter = require('../model/inverse-constructor.js');
const bitmapFileHelper = require('../lib/bitmapFileHelper.js');


describe('Inverter', function(){
  describe('#invertColor', function(){
    it('should ensure Inverter is running', function(done){
      bitmapFileHelper.invertColor(Inverter);
      assert.ok(Inverter);
      done();
    });
  });
});
