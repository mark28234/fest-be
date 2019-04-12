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

var RepoController =
/*#__PURE__*/
function () {
  function RepoController() {
    _classCallCheck(this, RepoController);
  }

  _createClass(RepoController, null, [{
    key: "getRepo",
    value: function getRepo(req, res, next) {
      _db.default.Repo.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        if (result) {
          res.status(200).send(result.dataValues);
        } else {
          res.status(400).send({
            error: 'No repo found with provided id'
          });
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }, {
    key: "getRepos",
    value: function getRepos(req, res, next) {
      _db.default.Repo.findAll().then(function (result) {
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
    key: "updateRepo",
    value: function updateRepo(req, res, next) {
      var repo = req.body;

      _db.default.Repo.findOne({
        where: {
          id: repo.id
        }
      }).then(function (result) {
        if (result) {
          result.update(repo).then(function () {
            res.status(201).send(repo);
          }).catch(function (err) {
            return res.status(500).send({
              error: 'Unable to update the repo details.\n' + err
            });
          });
        } else {
          res.status(400).send({
            error: 'No repo found with provided id'
          });
        }
      }).catch(function (err) {
        return next(err);
      });
    }
  }]);

  return RepoController;
}();

exports.default = RepoController;