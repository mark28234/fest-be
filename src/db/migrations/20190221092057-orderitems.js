'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'OrderItem',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        orderId: {
          type: Sequelize.INTEGER(11),
          allowNull: true,
          references: {
            model: 'Order',
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
        tableName: 'OrderItem'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderItem');
  }
};
