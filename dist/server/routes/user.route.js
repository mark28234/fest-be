"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRoute = _express.default.Router();

userRoute.get('/:id', _user.default.getUser);
var _default = userRoute;
exports.default = _default;