const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $and: Op.and,
  $or: Op.or
};

module.exports = {
  development: {
    username: 'root',
    password: 'R!ck&K@t3',
    database: 'fest_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: { timestamps: false },
    operatorsAliases: operatorsAliases
  },
  test: {
    username: 'root',
    password: 'root@123',
    database: 'fest_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: { timestamps: false }
  },
  production: {
    username: 'fest',
    password: 'fest@2019',
    database: 'fest_prod',
    host: process.env.MYSQL_IP,
    dialect: 'mysql',
    define: { timestamps: false }
  }
};
