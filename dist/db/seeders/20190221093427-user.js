'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      name: 'Monster Man',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y'
    }, {
      name: 'Wavatar',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y'
    }, {
      name: 'Retro',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
    }, {
      name: 'Robo Hash',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};