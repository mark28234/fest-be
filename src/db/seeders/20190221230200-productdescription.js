'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ProductDescription',
      [
        {
          productId: 1,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mattis ipsum, quis euismod massa pulvinar eget. Aliquam vitae vehicula nunc. Morbi tempor est est, quis lacinia mauris condimentum eget. Sed vehicula ac ex id accumsan. Fusce eget nulla eget enim pulvinar dictum id ac metus. Nunc eleifend vitae sem at sollicitudin. Duis commodo, ex id egestas ullamcorper, leo enim rhoncus enim, euismod vulputate urna massa ac lacus. In hac habitasse platea dictumst. In aliquam, mauris sed imperdiet tempus, nisl diam fringilla sapien, a mattis tortor velit eu mi. Nunc non dolor et dolor porta ultrices. Integer in nisl ac eros consectetur feugiat non ut felis. In sem nunc, accumsan eu felis non, euismod blandit nibh. Aenean iaculis consectetur augue id porttitor.

          Vestibulum et bibendum est. Vestibulum vitae egestas ligula, eu vehicula erat. Donec congue metus sed porta vestibulum. Curabitur vel cursus mi. Praesent tempus arcu feugiat, ultricies arcu eu, eleifend enim. Vestibulum porta finibus ante, sit amet pulvinar libero egestas in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a metus sem. Pellentesque rutrum lacinia aliquet. Vestibulum sapien dolor, condimentum et lacinia in, ullamcorper nec nibh.`
        },
        {
          productId: 2,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mattis ipsum, quis euismod massa pulvinar eget. Aliquam vitae vehicula nunc. Morbi tempor est est, quis lacinia mauris condimentum eget. Sed vehicula ac ex id accumsan. Fusce eget nulla eget enim pulvinar dictum id ac metus. Nunc eleifend vitae sem at sollicitudin. Duis commodo, ex id egestas ullamcorper, leo enim rhoncus enim, euismod vulputate urna massa ac lacus. In hac habitasse platea dictumst. In aliquam, mauris sed imperdiet tempus, nisl diam fringilla sapien, a mattis tortor velit eu mi. Nunc non dolor et dolor porta ultrices. Integer in nisl ac eros consectetur feugiat non ut felis. In sem nunc, accumsan eu felis non, euismod blandit nibh. Aenean iaculis consectetur augue id porttitor.

          Vestibulum et bibendum est. Vestibulum vitae egestas ligula, eu vehicula erat. Donec congue metus sed porta vestibulum. Curabitur vel cursus mi. Praesent tempus arcu feugiat, ultricies arcu eu, eleifend enim. Vestibulum porta finibus ante, sit amet pulvinar libero egestas in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a metus sem. Pellentesque rutrum lacinia aliquet. Vestibulum sapien dolor, condimentum et lacinia in, ullamcorper nec nibh.`
        },
        {
          productId: 3,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mattis ipsum, quis euismod massa pulvinar eget. Aliquam vitae vehicula nunc. Morbi tempor est est, quis lacinia mauris condimentum eget. Sed vehicula ac ex id accumsan. Fusce eget nulla eget enim pulvinar dictum id ac metus. Nunc eleifend vitae sem at sollicitudin. Duis commodo, ex id egestas ullamcorper, leo enim rhoncus enim, euismod vulputate urna massa ac lacus. In hac habitasse platea dictumst. In aliquam, mauris sed imperdiet tempus, nisl diam fringilla sapien, a mattis tortor velit eu mi. Nunc non dolor et dolor porta ultrices. Integer in nisl ac eros consectetur feugiat non ut felis. In sem nunc, accumsan eu felis non, euismod blandit nibh. Aenean iaculis consectetur augue id porttitor.

          Vestibulum et bibendum est. Vestibulum vitae egestas ligula, eu vehicula erat. Donec congue metus sed porta vestibulum. Curabitur vel cursus mi. Praesent tempus arcu feugiat, ultricies arcu eu, eleifend enim. Vestibulum porta finibus ante, sit amet pulvinar libero egestas in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a metus sem. Pellentesque rutrum lacinia aliquet. Vestibulum sapien dolor, condimentum et lacinia in, ullamcorper nec nibh.`
        },
        {
          productId: 4,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet mattis ipsum, quis euismod massa pulvinar eget. Aliquam vitae vehicula nunc. Morbi tempor est est, quis lacinia mauris condimentum eget. Sed vehicula ac ex id accumsan. Fusce eget nulla eget enim pulvinar dictum id ac metus. Nunc eleifend vitae sem at sollicitudin. Duis commodo, ex id egestas ullamcorper, leo enim rhoncus enim, euismod vulputate urna massa ac lacus. In hac habitasse platea dictumst. In aliquam, mauris sed imperdiet tempus, nisl diam fringilla sapien, a mattis tortor velit eu mi. Nunc non dolor et dolor porta ultrices. Integer in nisl ac eros consectetur feugiat non ut felis. In sem nunc, accumsan eu felis non, euismod blandit nibh. Aenean iaculis consectetur augue id porttitor.

          Vestibulum et bibendum est. Vestibulum vitae egestas ligula, eu vehicula erat. Donec congue metus sed porta vestibulum. Curabitur vel cursus mi. Praesent tempus arcu feugiat, ultricies arcu eu, eleifend enim. Vestibulum porta finibus ante, sit amet pulvinar libero egestas in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a metus sem. Pellentesque rutrum lacinia aliquet. Vestibulum sapien dolor, condimentum et lacinia in, ullamcorper nec nibh.`
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductDescription', null, {});
  }
};
