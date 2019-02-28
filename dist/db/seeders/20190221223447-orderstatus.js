'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderStatus', [{
      name: 'Ordered'
    }, {
      name: 'Cancelled'
    }, {
      name: 'Delivered'
    }]);
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderStatus', null, {});
  }
};