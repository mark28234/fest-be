"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Order'
  });

  Order.associate = function (models) {
    Order.belongsTo(models.OrderStatus, {
      as: 'status',
      foreignKey: 'statusId'
    });
    Order.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    Order.hasMany(models.OrderItem, {
      as: 'items',
      foreignKey: 'orderId'
    });
  };

  return Order;
}