"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(sequelize, DataTypes) {
  var ProductDescription = sequelize.define('ProductDescription', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'ProductDescription'
  });

  ProductDescription.associate = function (models) {
    ProductDescription.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
  };

  return ProductDescription;
}