// var _ = require('lodash');

exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    // first solution
      // var result = 0;

      // for (var i = 0; i < arr.length; i++) {
      //   result += arr[i];
      // }
      // return result;

    // second solutuion
      // return arr.reduce(function(sum, x) {
      //   return sum + x;
      // });

    // third solution
    return _.reduce(arr, function(sum, x) {
      return sum + x;
    }); 
  },

  remove : function(arr, item) {
    // solution 1
      // return arr.filter(function(x) {
      //   return x !== item;
      // });

    // solution 2
      // var result = [];
      // for (var i = 0; i < arr.length; i++) {
      //   if (arr[i] !== item) {
      //     result.push(arr[i]);
      //   }
      // }
      // return result;

    // solution 3
      // for (var i = 0; i < arr.length; i++ ) {
      //   if (arr[i] === item) {
      //     arr.splice(i, 1);
      //   }
      // }
      // return arr;

    // solution 4

    return _.reject(arr, function(x) {
      return x === item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++ ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--; // You remove the item, so it needs to go back one to check next item
      }
    }
    return arr;
  },

  append : function(arr, item) {
    // solution 1
    // arr.push(item);
    // return arr;

    // solution 2
    return arr.concat(item);
  },

  truncate : function(arr) {
    // solution 1
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
    // solution1
    return arr1.concat(arr2);

    // solution2
      // for (var i = 0; i < arr2.length; i++) {
      //   arr1.push(arr2[i]);
      // }

      // return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    // solution1
      // var count = 0;
      // for ( var i = 0; i < arr.length; i++ ) {
      //   if (arr[i] === item) {
      //     count++;
      //   }
      // }

      // return count;

    // Solution 2
      var nums = {};
      for (var i = 0; i < arr.length; i++ ) {
        if (nums.hasOwnProperty(arr[i])) {
        // if (nums[arr[i]]) {
          nums[arr[i]]++ ;
        } else {
          nums[arr[i]] = 1;
        }
      }

      return nums[item];
  },

  duplicates : function(arr) {
    var numbers = {};
    var dupes = [];

    for (var i = 0; i < arr.length; i++ ) {
      if (numbers.hasOwnProperty(arr[i])) {
        numbers[arr[i]]++;
      } else {
        numbers[arr[i]] = 1;
      }
    }

    for (var item in numbers) {
      if (numbers[item] > 1) {
        dupes.push(item);
      }
    }

    return dupes;
  },

  square : function(arr) {
    // solution 1
      // function square(x) { return x * x; }
      // return arr.map(square);
    return arr.map(function(x) { return x * x; });
  },

  findAllOccurrences : function(arr, target) {
  }
};
