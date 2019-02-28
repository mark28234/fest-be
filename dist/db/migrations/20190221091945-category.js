'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Category', {
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
      parent: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
      }
    }, {
      tableName: 'Category'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Category');
  }
};