"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _product = _interopRequireDefault(require("../controllers/product.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productRoute = _express.default.Router();

productRoute.get('/:id', _product.default.getProduct);
productRoute.get('/', _product.default.getProducts);
productRoute.get('/description/:id', _product.default.getProductDescription);
productRoute.post('/search', _product.default.search);
var _default = productRoute;
exports.default = _default;