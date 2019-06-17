"use strict";

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkLink = _interopRequireDefault(require("ink-link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _ink.render)(_react["default"].createElement(_inkLink["default"], {
  url: "https://sindresorhus.com"
}, "My ", _react["default"].createElement(_ink.Color, {
  cyan: true
}, "website")));