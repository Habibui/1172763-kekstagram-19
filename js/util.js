'use strict';

(function () {

  var ESC_KEYCODE = 27;

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  var getRandomElement = function (array) {
    return array[getRandomInt(0, array.length)];
  };

  window.utils = {
    ESC_KEYCODE: ESC_KEYCODE,
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement
  };

})();
