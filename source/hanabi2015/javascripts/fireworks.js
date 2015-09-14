'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Fireworks = (function () {
  function Fireworks(id) {
    _classCallCheck(this, Fireworks);

    this.initCanvas(id);
    this.settings = {
      gravity: 0.2,
      damping: 0.95,
      sparkSize: 3
    };
    this.fire();
  }

  _createClass(Fireworks, [{
    key: 'initCanvas',
    value: function initCanvas(selector) {
      this.canvas = document.getElementById(selector);
      this.canvas.width = 500;
      this.canvas.height = 500;
      this.context = this.canvas.getContext('2d');
      this.context.fillStyle = '#000000';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: 'initSparks',
    value: function initSparks() {
      var x = this.canvas.width / 2;
      var y = this.canvas.height / 2;

      for (var i = 0; i <= 700; i++) {
        var vx = Math.random();
        var vy1 = Math.pow(vx, 2 / 3) - Math.sqrt(1 - vx * vx);
        var vy2 = Math.pow(vx, 2 / 3) + Math.sqrt(1 - vx * vx) - 0.4;
        var speed = Math.random() * 6;

        vx *= speed;
        vy1 *= speed;
        vy2 *= speed;

        this.sparks.push({ x: x, y: y, vx: vx, vy: -vy1 });
        this.sparks.push({ x: x, y: y, vx: vx, vy: -vy2 });
        this.sparks.push({ x: x, y: y, vx: -vx, vy: -vy1 });
        this.sparks.push({ x: x, y: y, vx: -vx, vy: -vy2 });
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.sparks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var spark = _step.value;

          spark.x += spark.vx;
          spark.y += spark.vy + this.settings.gravity;
          spark.vx *= this.settings.damping;
          spark.vy *= this.settings.damping;
          this.draw(spark);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.context.globalCompositeOperation = 'source-over';
      this.context.fillStyle = 'rgba(0, 0, 0, 0.3)';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.sparkSize *= 0.97;
      if (this.sparkSize < 0.03) {
        this.fire();
        return;
      }
      requestAnimationFrame(this.update.bind(this));
    }
  }, {
    key: 'fire',
    value: function fire() {
      this.sparkSize = this.settings.sparkSize;
      this.sparks = [];
      this.initSparks();
      requestAnimationFrame(this.update.bind(this));
    }
  }, {
    key: 'draw',
    value: function draw(spark) {
      this.context.fillStyle = '#723057';
      this.context.globalCompositeOperation = 'lighter';
      this.context.beginPath();
      this.context.arc(spark.x, spark.y, this.sparkSize, 0, Math.PI * 2, true);
      this.context.fill();
    }
  }]);

  return Fireworks;
})();
