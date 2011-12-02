
var vows = require('vows');
var assert = require('assert');

var belt = new require('../lib/belt');

var testArray = [
  { name : 'edward', job : 'developer' },
  { name : 'edward hotchkiss', job : 'developer' },
  { name : 'edward', job : 'developer' },
  { name : 'edward', job : 'hacker' },
  { name : 'edward', job : 'coder' },
  { name : 'edward', job : 'programmer' },
  { name : 'edward', job : 'developer' },
  { name : 'edward', job : 'developer' }
];

vows.describe('belt.unique() tests').addBatch({
  'when creating a multidimensional array with duplicate objects and using belt.unique(testArray)':{
    topic:function(){
      return belt.unique(testArray);
    },
    'belt.objectLength should be 6':function(topic){
      assert.equal(belt.objectLength(topic), 6);
    }
  }
}).export(module);

/* EOF */