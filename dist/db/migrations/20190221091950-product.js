'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Product', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      imageUrl: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0'
      },
      inStock: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
      },
      categoryId: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references: {
          model: 'Category',
          key: 'id'
        }
      },
      rating: {
        type: Sequelize.FLOAT,
        defaultValue: '3.5'
      }
    }, {
      tableName: 'Product'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Product');
  }
};