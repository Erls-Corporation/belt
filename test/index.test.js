
var vows = require('vows');
var assert = require('assert');

var belt = new require('../lib/belt');

vows.describe('general module tests').addBatch({
  'when instantiating belt':{
    topic:function(){ 
      return belt;
    },
    'belt should be an object':function(topic) {
      assert.equal(typeof(topic), 'object');
    }
  },
  'when creating a function and getting typeOf':{
    topic:function(){
      return function(){};
    },
    'belt.typeOf should be a function':function(topic){
      assert.equal(belt.typeOf(topic), 'function');
    }
  },
  'when creating an object and getting typeOf':{
    topic:function(){
      return {};
    },
    'belt.typeOf should be an object':function(topic){
      assert.equal(belt.typeOf(topic), 'object');
    }
  },
  'when creating a string and getting typeOf':{
    topic:function(){
      return 'test'
    },
    'belt.typeOf should be a string':function(topic){
      assert.equal(belt.typeOf(topic), 'string');
    }
  },
  'when creating a number and getting typeOf':{
    topic:function(){
      return 123;
    },
    'belt.typeOf should be a number':function(topic){
      assert.equal(belt.typeOf(topic), 'number');
    }
  },
  'when creating a RegExp and getting typeOf':{
    topic:function(){
      return new RegExp(/test/gi);
    },
    'belt.typeOf should be a regexp':function(topic){
      assert.equal(belt.typeOf(topic), 'regexp');
    }
  },
  'when creating an array and getting typeOf':{
    topic:function(){
      return ['one', 'two', 'three'];
    },
    'belt.typeOf should be an array':function(topic){
      assert.equal(belt.typeOf(topic), 'array');
    }
  }
}).export(module);

/* EOF */