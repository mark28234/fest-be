"use strict";

/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
  var OrderItem = sequelize.define('OrderItem', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'OrderItem'
  });

  OrderItem.associate = function (models) {
    OrderItem.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
  };

  return OrderItem;
};