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
    username: 'root',
    password: '', // KeyCenter 配置项密文
    database: 'RAP2_DELOS_APP',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  }
}
