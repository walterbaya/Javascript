const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'astinm345',
  database: 'test'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


//For connecting database use node testBase.js

//if dont work do rm -rf node_modules
//then node install.