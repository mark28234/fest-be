'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Product', [{
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81QkPz%2BagLL._SX679_.jpg',
      name: 'Micromax 81 cm (32 inches) HD Ready LED TV 32T8361HD/32T8352D (Black)',
      price: 10490,
      discount: 48,
      inStock: true,
      rating: 4,
      categoryId: 3
    }, //1
    {
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/910HREIJBdL._SL1500_.jpg',
      name: 'Samsung 80 cm (32 Inches) Series 4 HD Ready LED TV UA32N4010AR (Black) (2018 model)',
      price: 14490,
      discount: 38,
      inStock: true,
      rating: 5,
      categoryId: 3
    }, //2
    {
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ICPCtlf3L._SL1500_.jpg',
      name: 'Mi LED TV 4C PRO 80 cm (32) HD Ready Android TV (Black)',
      price: 13999,
      discount: 18,
      inStock: true,
      rating: 3.5,
      categoryId: 4
    }, //3
    {
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Wh2h3q%2BvL._SL1500_.jpg',
      name: 'LG 80 cm (32 Inches) HD Ready LED Smart TV 32LJ573D (Silver) (2017 model)',
      price: 19399,
      discount: 37,
      inStock: true,
      rating: 4.5,
      categoryId: 4 //4

    }]);
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Product', null, {});
  }
};