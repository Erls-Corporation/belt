
/*!
  Belt
  NodeJS Utility (belt) Functions
  @author Edward Hotchkiss
*/

var belt = exports;

belt.typeOf = function(obj){
  if (Array.isArray(obj)) {
    return 'array';
  } else if (typeof(obj) === 'object') {
    return obj.constructor.name === 'RegExp' ? 'regexp' : 'object';
  } else {
    return typeof(obj);
  };
};

belt.arrayToRegExp = function(arr) {
  var pattern = '';
  arr.forEach(function(j) {
    pattern += j + "|";
  });
  pattern = pattern.replace(/.$/, '');
  return new RegExp(pattern, "i");
};

/* EOF */