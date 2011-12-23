
/*!
  Belt
  NodeJS Utility (belt) Functions
  (Helper methods that I use often in Modules)
  @author Edward Hotchkiss
*/

var belt = exports;

/*
  @method typeOf
  enhanced typeof function
  @param {Object} obj Object to determine the type of
  @returns {String} typeof typeof
*/

belt.typeOf = function(obj){
  if (obj.constructor.name === 'RegExp'){
    return 'regexp';
  } else if (Array.isArray(obj)) {
    return 'array';
  } else {
    return typeof(obj);
  };
};

/*
  @method arrayToRegExp
  Convert an array into a regexp by building our the /array/
  @param {Array} arr Array to convert to a RegExp
  @returns {RegExp} regexp /a/regular/expression/i
*/

belt.arrayToRegExp = function(arr){
  var pattern = '';
  arr.forEach(function(j) {
    pattern += j + "|";
  });
  pattern = pattern.replace(/.$/, '');
  return new RegExp(pattern, "i");
};

/*
  @method memory
  Determinate current memory usage with formating
  @param {Number} kDec Decimal place to round to
  @param {Boolean} returnMBString Whether or not to return MB tailing
  @return {String} memory Current memory usage
*/

belt.memory = function(kDec, returnMBString){
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

/*
  @method eq
  Determine if two values are equal
  @param {Object} a First object
  @param {Object} b Second object
*/

belt.eq = function (a, b){
  return a == b;
};

/*
  @method strictEq
  Determine if two values are equal and typeof is equal
  @param {Object} a First object
  @param {Object} b Second object
*/

belt.strictEq = function (a, b){
  return a === b;
};

/*
  @method objectLength
  Return length of an object
  @param {Array} arr Array to determine length of
  @returns {Number} len Length of array [items]
*/

belt.objectLength = function(obj){
  return obj.length;
};

/* EOF */