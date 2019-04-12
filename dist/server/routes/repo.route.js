"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _repo = _interopRequireDefault(require("../controllers/repo.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repoRoute = _express.default.Router();

repoRoute.get('/', _repo.default.getRepos);
repoRoute.get('/:id', _repo.default.getRepo);
repoRoute.post('/', _repo.default.updateRepo);
var _default = repoRoute;
exports.default = _default;