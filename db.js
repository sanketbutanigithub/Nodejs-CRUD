const mysql = require("mysql2/promise");

const mysqlpool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: null,
  port: 8036,
  database: "user_db",
});

module.exports = mysqlpool;
