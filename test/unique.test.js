
var vows = require('vows');
var assert = require('assert');

var belt = new require('../lib/belt');

var testArray = [
  { name : 'edward', job : 'developer', date : new Date() },
  { name : 'edward hotchkiss', job : 'developer', date : new Date() },
  { name : 'edward', job : 'developer', date : new Date() },
  { name : 'edward', job : 'hacker', date : new Date() },
  { name : 'edward', job : 'coder', date : new Date() },
  { name : 'edward', job : 'programmer', date : new Date() },
  { name : 'edward', job : 'developer', date : new Date() },
  { name : 'edward', job : 'developer', date : new Date() }
];

vows.describe('belt.unique() tests').addBatch({
  'when creating a multidimensional array with duplicate objects and using belt.unique(testArray)':{
    topic:function(){
      return belt.unique(testArray);
    },
    'typeOf should be a regexp':function(topic){
      assert.equal(belt.length, 6 );
    }
  }
}).export(module);

/* EOF */