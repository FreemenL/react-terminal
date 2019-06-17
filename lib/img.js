"use strict";

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkImage = _interopRequireDefault(require("ink-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _ink.render)(_react["default"].createElement(_inkImage["default"], {
  preserveAspectRatio: true,
  src: "https://raw.githubusercontent.com/kevva/ink-image/master/screenshot.png",
  width: "50%"
}));