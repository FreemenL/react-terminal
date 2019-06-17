"use strict";

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkBox = _interopRequireDefault(require("ink-box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _ink.render)(_react["default"].createElement(_inkBox["default"], {
  borderStyle: "double",
  borderColor: "cyan",
  "float": "center",
  padding: 2
}, "I Love ", _react["default"].createElement(_ink.Color, {
  magenta: true
}, "You")));