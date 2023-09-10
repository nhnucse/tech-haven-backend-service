/* eslint-disable no-undef */
 const DB_URL = process.env.MONGODB_URL;
 const NODE_ENV = process.env.NODE_ENV;
 const PORT = process.env.PORT;
module.exports = {
  NODE_ENV,
  DB_URL,
  PORT
};

