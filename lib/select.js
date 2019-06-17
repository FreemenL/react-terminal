"use strict";

var _react = _interopRequireDefault(require("react"));

var _ink = require("ink");

var _inkSelectInput = _interopRequireDefault(require("ink-select-input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Demo = function Demo() {
  var handleSelect = function handleSelect(item) {
    console.log(item.value); // `item` = { label: 'First', value: 'first' }
  };

  var items = [{
    label: 'First',
    value: 'first'
  }, {
    label: 'Second',
    value: 'second'
  }, {
    label: 'Third',
    value: 'third'
  }];
  return _react["default"].createElement(_inkSelectInput["default"], {
    items: items,
    onSelect: handleSelect
  });
};

(0, _ink.render)(_react["default"].createElement(Demo, null));