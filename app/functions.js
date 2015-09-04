exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(f2) {
      return str + ', ' + f2;
    };
  },

  makeClosures : function(arr, fn) {
    // Solution 1
    // var closure = function(arg) {
    //   return function() { return fn(arg); };
    // };
    // function closure (arg) {
    //   return function() { return fn(arg); };
    // }
    // return arr.map(function(arg) {
    //   return closure(arg);
    // });

    // solution 2
    // return arr.map(function(arg) {
    //   return function() { return fn(arg); };
    // });

    // solution 3
    function closure (arg) {
      return function() {return fn(arg);};
    }

    return arr.map(closure);
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
