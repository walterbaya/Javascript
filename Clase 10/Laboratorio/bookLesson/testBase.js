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