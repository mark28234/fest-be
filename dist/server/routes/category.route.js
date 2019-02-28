"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _category = _interopRequireDefault(require("../controllers/category.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryRoute = _express.default.Router();

categoryRoute.get('/', _category.default.getCategories);
var _default = categoryRoute;
exports.default = _default;