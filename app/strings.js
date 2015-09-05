exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var letterCount = {};
    var strArr = str.split('');
    var result = [];

    for (var i = 0; i < strArr.length; i++ ) {
      if (! letterCount[strArr[i]]) {
        letterCount[strArr[i]] = 1;
      } else if (letterCount[strArr[i]] && letterCount[strArr[i]] < amount) {
        letterCount[strArr[i]]++;
      }
    }

    for (var letter in letterCount) {
      if (letterCount.hasOwnProperty(letter)) {
        _.times(letterCount[letter], function() {
          result.push(letter);
        });
      }
    }

    return result.join('');
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
