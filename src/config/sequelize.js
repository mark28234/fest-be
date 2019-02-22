module.exports = {
  development: {
    username: 'root',
    password: 'root@123',
    database: 'fest_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: { timestamps: false }
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
    username: 'root',
    password: 'root@123',
    database: 'fest_prod',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: { timestamps: false }
  }
};
