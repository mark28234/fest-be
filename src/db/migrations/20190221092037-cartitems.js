'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'CartItem',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: 'User',
            key: 'id'
          }
        },
        productId: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: {
            model: 'Product',
            key: 'id'
          }
        },
        quantity: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          defaultValue: '1'
        }
      },
      {
        tableName: 'CartItem'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CartItem');
  }
};
