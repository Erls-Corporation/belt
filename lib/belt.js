
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

// calculate curent memory usage
belt.memory = function(kDec, returnMBString) {
  kDec = kDec || 2;
  returnMBString = returnMBString || false;
  var memoryObj = process.memoryUsage();
  var bytes = parseInt(memoryObj.rss);
  if (bytes) {
    var MBytes = bytes / (1024*1024);
    var roundedMegabytes = Math.round(MBytes * Math.pow(10, kDec)) / Math.pow(10, kDec);
    if (returnMBString === true) {
      var MB = roundedMegabytes.toString() + " MB";
    } else {
      var MB = roundedMegabytes;
    }
    return MB;
  } else {
    return null;
  }
};

/* EOF */