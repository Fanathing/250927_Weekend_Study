const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "0215",
    database: "block13",
    connectionLimit: 5,
}).promise();


module.exports = pool