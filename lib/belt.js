
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

/* EOF */