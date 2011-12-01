
/*!
  Belt
  NodeJS Utility (belt) Functions
  @author Edward Hotchkiss
*/

var belt = exports;

exports.typeOf = function(obj){
  if (typeof(obj) === 'object') {
    return obj.constructor.name === 'RegExp' ? 'regexp' : 'function';
  } else {
    return typeof(value);
  };
};

/* EOF */