const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user: 'dev',
    password: 'password',
    database: 'divine'
  });

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySql Connected.');
})

module.exports = db;