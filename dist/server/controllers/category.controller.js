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

var CategoryController =
/*#__PURE__*/
function () {
  function CategoryController() {
    _classCallCheck(this, CategoryController);
  }

  _createClass(CategoryController, null, [{
    key: "getCategories",
    value: function getCategories(req, res, next) {
      _db.default.Category.findAll().then(function (result) {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(400).send([]);
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }]);

  return CategoryController;
}();

exports.default = CategoryController;