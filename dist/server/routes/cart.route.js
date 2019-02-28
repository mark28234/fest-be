"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cart = _interopRequireDefault(require("../controllers/cart.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cartRoute = _express.default.Router();

cartRoute.get('/:id', _cart.default.getCart);
cartRoute.post('/', _cart.default.addItem);
var _default = cartRoute;
exports.default = _default;