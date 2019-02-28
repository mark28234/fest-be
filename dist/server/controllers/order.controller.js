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

var OrderController =
/*#__PURE__*/
function () {
  function OrderController() {
    _classCallCheck(this, OrderController);
  }

  _createClass(OrderController, null, [{
    key: "getOrders",
    value: function getOrders(req, res, next) {
      _db.default.Order.findAll({
        where: {
          userId: req.params.id
        },
        include: [{
          model: _db.default.User,
          as: 'user'
        }, {
          model: _db.default.OrderStatus,
          as: 'status'
        }, {
          model: _db.default.OrderItem,
          as: 'items',
          include: {
            model: _db.default.Product,
            as: 'product'
          }
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
          statusId = _req$body.statusId,
          items = _req$body.items;
      var addOrderQuery = "INSERT INTO `ORDER` (userId, statusId, date) VALUES (?, ?, ?)";

      _db.default.sequelize.transaction().then(function (transaction) {
        _db.default.sequelize.query(addOrderQuery, {
          replacements: [userId, statusId, new Date()]
        }).then(function (result) {
          console.log(result);

          if (result) {
            items.forEach(function (item) {
              var addOrderItemQuery = "INSERT INTO ORDERITEM (orderId, productId, quantity) VALUES (?, ?, ?)";

              _db.default.sequelize.query(addOrderItemQuery, {
                replacements: [result[0], item.productId, item.quantity]
              }).then(function (result) {
                if (result) {
                  transaction.commit();
                  res.status(200).send(true);
                }
              }).catch(function (err) {
                transaction.rollback();
                next(err);
              });
            });
          } else {
            transaction.rollback();
            res.status(400).send({
              error: 'Unable to create order'
            });
          }
        }).catch(function (err) {
          transaction.rollback();
          next(err);
        });
      });
    }
  }]);

  return OrderController;
}();

exports.default = OrderController;