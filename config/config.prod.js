module.exports = {
  version: '2.3',
  serve: {
    port: 10377
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess'
  },
  db: {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    username: 'joe',
    password: 'lzqq1088',
    database: 'RAP2_DELOS_APP',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: true
  }
}
