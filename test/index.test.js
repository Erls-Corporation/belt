
var vows = require('vows');
var assert = require('assert');

var belt = new require('../lib/belt');

vows.describe('general module tests').addBatch({
  'when instantiating belt':{
    topic:function(){ 
      return belt;
    },
    'github3 should be an object':function(topic) {
      assert.equal(typeof(topic), 'object');
    }
  }
}).export(module);

/* EOF */