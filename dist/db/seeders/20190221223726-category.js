'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Category', [{
      name: 'Electronics',
      parent: 0
    }, //1
    {
      name: 'Telivision',
      parent: 1
    }, //2
    {
      name: 'Standard TV',
      parent: 2
    }, //3
    {
      name: 'Smart TV',
      parent: 2
    }, //4
    {
      name: 'Men',
      parent: 0
    }, //5
    {
      name: "Men's Clothing",
      parent: 5
    }, //6
    {
      name: 'Jeans',
      parent: 6
    }, //7
    {
      name: 'Sportwear',
      parent: 6
    }, //8
    {
      name: 'Formals',
      parent: 6
    }, //9
    {
      name: 'Women',
      parent: 0
    }, //10
    {
      name: 'Womens Clothing',
      parent: 10
    }, //11
    {
      name: 'Accessories',
      parent: 10
    }, //12
    {
      name: 'Shoes',
      parent: 10 //13

    }]);
  },
  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};