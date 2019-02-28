"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _order = _interopRequireDefault(require("../controllers/order.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderRoute = _express.default.Router();

orderRoute.get('/:id', _order.default.getOrders);
orderRoute.post('/', _order.default.addItem);
var _default = orderRoute;
exports.default = _default;