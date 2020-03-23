'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var DEBOUNCE_INTERVAL = 500;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  var getRandomElement = function (array) {
    return array[getRandomInt(0, array.length)];
  };

  var shuffleArray = function (arr) {
    var j; var temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  };

  var debounce = function (callback) {
    var lastTimeout = null;

    return function () {
      var params = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        callback.apply(null, params);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    ESC_KEYCODE: ESC_KEYCODE,
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement,
    shuffleArray: shuffleArray,
    debounce: debounce
  };

})();
