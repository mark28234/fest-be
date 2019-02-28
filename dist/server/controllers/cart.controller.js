"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CartController =
/*#__PURE__*/
function () {
  function CartController() {
    _classCallCheck(this, CartController);
  }

  _createClass(CartController, null, [{
    key: "getCart",
    value: function getCart(req, res, next) {
      _db.default.CartItem.findAll({
        where: {
          userId: req.params.id
        },
        include: [{
          model: _db.default.User,
          as: 'user'
        }, {
          model: _db.default.Product,
          as: 'product'
        }]
      }).then(function (result) {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(200).send([]);
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(req, res, next) {
      var _req$body = req.body,
          userId = _req$body.userId,
          productId = _req$body.productId,
          quantity = _req$body.quantity;
      var query = "INSERT INTO CARTITEM (userId, productId, quantity) VALUES (?, ?, ?)";

      _db.default.sequelize.query(query, {
        replacements: [userId, productId, quantity]
      }).then(function (result) {
        if (result) {
          res.status(201).send(true);
        } else {
          res.status(400).send({
            error: 'Unable to add item to cart'
          });
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }]);

  return CartController;
}();

exports.default = CartController;