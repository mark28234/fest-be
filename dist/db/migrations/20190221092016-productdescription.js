'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('ProductDescription', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      productId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'Product',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    }, {
      tableName: 'ProductDescription'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('ProductDescription');
  }
};