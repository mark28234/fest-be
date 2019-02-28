'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
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
      profileImageUrl: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'User'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};