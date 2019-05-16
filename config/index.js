require('dotenv').config({ path: '.env' });

exports.ENV = {
  PORT: process.env.PORT || '8080',

  DB_HOST: process.env.DB_HOST || '127.0.0.1',
  DB_PORT: process.env.DB_PORT || '3306',
  DB_NAME: process.env.NAME || 'dbName',
  DB_USER: process.env.USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'abcde1FGH@',
  DB_DIALECT: process.env.DB_DIALECT || 'mysql',
};
