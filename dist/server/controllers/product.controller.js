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

var ProductController =
/*#__PURE__*/
function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }

  _createClass(ProductController, null, [{
    key: "getProduct",
    value: function getProduct(req, res, next) {
      _db.default.Product.findOne({
        where: {
          id: req.params.id
        },
        include: {
          model: _db.default.Category,
          as: 'category'
        }
      }).then(function (result) {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({
            error: 'No product found with provided id'
          });
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }, {
    key: "getProducts",
    value: function getProducts(req, res, next) {
      _db.default.Product.findAll({
        include: {
          model: _db.default.Category,
          as: 'category'
        }
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
    key: "getProductDescription",
    value: function getProductDescription(req, res, next) {
      _db.default.ProductDescription.findOne({
        where: {
          id: req.params.id
        },
        include: {
          model: _db.default.Product,
          as: 'product',
          include: {
            model: _db.default.Category,
            as: 'category'
          }
        }
      }).then(function (result) {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({
            error: 'No product found with provided id'
          });
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }, {
    key: "search",
    value: function search(req, res, next) {
      var query = req.body;

      _db.default.Product.findAll({
        where: query,
        include: {
          model: _db.default.Category,
          as: 'category'
        }
      }).then(function (result) {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(400).send({
            error: 'No product found with provided features'
          });
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }]);

  return ProductController;
}();

exports.default = ProductController;