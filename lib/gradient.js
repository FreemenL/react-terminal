"use strict";

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkGradient = _interopRequireDefault(require("ink-gradient"));

var _inkBigText = _interopRequireDefault(require("ink-big-text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _ink.render)(_react["default"].createElement(_inkGradient["default"], {
  name: "rainbow"
}, _react["default"].createElement(_inkBigText["default"], {
  text: "haha!"
})));