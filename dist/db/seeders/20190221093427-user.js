'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [{
      name: 'Monster Man',
      userName: 'monsterman',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y',
      password: 'P@$$w0rd'
    }, {
      name: 'Wavatar',
      userName: 'wavatar',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y',
      password: 'P@$$w0rd'
    }, {
      name: 'Retro',
      userName: 'retro',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y',
      password: 'P@$$w0rd'
    }, {
      name: 'Robo Hash',
      userName: 'robohash',
      profileImageUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y',
      password: 'P@$$w0rd'
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};