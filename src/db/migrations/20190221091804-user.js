'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'User',
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
        },
        userName: {
          type: Sequelize.STRING(45),
          allowNull: false
        },
        profileImageUrl: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      {
        tableName: 'User'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};
