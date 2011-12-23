
var vows = require('vows'),
  assert = require('assert');

var belt = new require('../lib/belt');

vows.describe('belt.arrayToRegExp() tests').addBatch({
  'when creating an array and using belt.arrayToRegExp':{
    topic:function(){
      return belt.arrayToRegExp(['these','are','test','items']);
    },
    'typeOf should be a regexp':function(topic){
      assert.equal(belt.typeOf(topic), 'regexp');
    }
  }
}).export(module);

/* EOF */