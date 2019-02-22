'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'OrderStatus',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(45),
          allowNull: false
        }
      },
      {
        tableName: 'OrderStatus'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrderStatus');
  }
};
