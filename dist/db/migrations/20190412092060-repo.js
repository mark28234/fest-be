'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Repo', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      repoId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      found: {
        type: Sequelize.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: true
      }
    }, {
      tableName: 'Repo',
      charset: 'utf8mb4'
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Repo');
  }
};