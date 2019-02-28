"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    inStock: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: '3.5'
    }
  }, {
    tableName: 'Product'
  });

  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId'
    });
  };

  return Product;
}