// dbconfig.js
const mysql = require("mysql2");

const dbcon = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Billing",
  connectionLimit: 10,
});

module.exports = {
  dbcon
};
