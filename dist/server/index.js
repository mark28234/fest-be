"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bodyParser = require('body-parser');

var Server =
/*#__PURE__*/
function () {
  function Server() {
    _classCallCheck(this, Server);
  }

  _createClass(Server, null, [{
    key: "init",
    value: function init(port, ip) {
      var app = new _express.default();
      app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      });
      app.use(bodyParser.json());
      app.get('/', function (req, res) {
        res.send('Server is running');
      });
      app.use('/api', _routes.default);
      app.listen(port, ip);
      console.log("Server is running @ ".concat(ip, ":").concat(port, "/api"));
    }
  }]);

  return Server;
}();

exports.default = Server;