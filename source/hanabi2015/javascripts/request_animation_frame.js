'use strict';

var _arr = ['moz', 'o', 'ms'];
for (var _i = 0; _i < _arr.length; _i++) {
  var vendor = _arr[_i];
  window.requestAnimationFrame = window[vendor + 'RequestAnimationFrame'];
  if (window.requestAnimationFrame) {
    break;
  }
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function (callback) {
    setTimeout(callback, 1000 / 60);
  };
}
