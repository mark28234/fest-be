'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Order', {
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
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      statusId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'OrderStatus',
          key: 'id'
        }
      }
    }, {
      tableName: 'Order'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Order');
  }
};