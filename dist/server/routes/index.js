"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _product = _interopRequireDefault(require("./product.route"));

var _cart = _interopRequireDefault(require("./cart.route"));

var _order = _interopRequireDefault(require("./order.route"));

var _category = _interopRequireDefault(require("./category.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use('/user', _user.default);
router.use('/product', _product.default);
router.use('/cart', _cart.default);
router.use('/order', _order.default);
router.use('/category', _category.default);
var _default = router;
exports.default = _default;