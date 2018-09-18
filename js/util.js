'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  window.ESC_KEYCODE = ESC_KEYCODE;
  window.ENTER_KEYCODE = ENTER_KEYCODE;

  window.randomInteger = function () {
    var colorInteger = Math.floor(Math.random() * 256);
    return colorInteger;
  };

  window.pickRandomElement = function (element) {
    var randElement = element[Math.floor(Math.random() * element.length)];
    return randElement;
  };
})();
