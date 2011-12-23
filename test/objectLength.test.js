
var vows = require('vows'),
    assert = require('assert');

var belt = new require('../lib/belt');

vows.describe('belt.objectLength() tests').addBatch({
  'when creating a single dimensional array and using belt.objectLength':{
    topic:function(){
      return belt.objectLength([1, 2, 3]);
    },
    'the lenth should be 3':function(topic){
      assert.equal(topic, 3);
    }
  },
  'when creating a multi dimensional array and using belt.objectLength':{
    topic:function(){
      return belt.objectLength([[1,2, 3], [4, 5, 6]]);
    },
    'the lenth should be 3':function(topic){
      assert.equal(topic, 2);
    }
  }
}).export(module);

/* EOF */