'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderStatus', [
      {
        name: 'Ordered'
      },
      {
        name: 'Cancelled'
      },
      {
        name: 'Delivered'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderStatus', null, {});
  }
};
