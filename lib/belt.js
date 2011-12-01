
/*!
  Belt
  NodeJS Utility (belt) Functions
  (Helper methods that I use often in Modules)
  @author Edward Hotchkiss
*/

var belt = exports;

// determine a more accurate typeof
belt.typeOf = function(obj){
  if (Array.isArray(obj)) {
    return 'array';
  } else if (typeof(obj) === 'object') {
    return obj.constructor.name === 'RegExp' ? 'regexp' : 'object';
  } else {
    return typeof(obj);
  };
};

// convert an array to a RegExp
belt.arrayToRegExp = function(arr){
  var pattern = '';
  arr.forEach(function(j) {
    pattern += j + "|";
  });
  pattern = pattern.replace(/.$/, '');
  return new RegExp(pattern, "i");
};

/* EOF */