'use strict';

const assert = require('assert');
const Grayscaler = require('../model/grayscale-constructor.js');

describe('Grayscaler', function(){
  describe('#grayscale', function(){
    it('should ensure Grayscaler is running', function(done){
      assert.ok(Grayscaler);
      done();
    });
  });
});
