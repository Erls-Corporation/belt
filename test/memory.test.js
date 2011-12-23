
var vows = require('vows'),
  assert = require('assert');

var belt = new require('../lib/belt');

vows.describe('belt.memory() tests').addBatch({
  'when calculating current memory usage':{
    topic:function(){
      return belt.memory(4, true);
    },
    'typeOf should be a string and not be null':function(topic){
      assert.notEqual(topic, null);
      assert.equal(belt.typeOf(topic), 'string');
    }
  }
}).export(module);

/* EOF */