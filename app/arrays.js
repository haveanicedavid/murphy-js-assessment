// var _ = require('lodash');

exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(sum, x) {
      return sum + x;
    });
  },

  remove : function(arr, item) {
    return _.reject(arr, function(x) {
      return x === item;
    });
    // return arr.filter(function(x) {
    //   return x !== item;
    // });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0, length = arr.length; i < length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;

      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var i, count = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    // var unique = _.uniq(arr);
    var i, unique = [], result = [];
    for (i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) < 0) {
        unique.push(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
    return _.uniq(result);
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
