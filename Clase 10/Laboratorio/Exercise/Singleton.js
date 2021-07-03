var BaseDeDatos;

(function () {

    var mysql = require('mysql');
    var con;

    BaseDeDatos = function () {
        if (con) {
            return con;
        }
        con = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "astinm345",
            database: 'test'
        });
        con.connect((err) => {
            if (err) throw err;
            console.log("Connected");
        });
    }
    BaseDeDatos.prototype.execute = function (sql) {
        con.query(sql, function (err, result) {
            if (err) throw err;
            var res = JSON.stringify(result);
            console.log("Result: " + res);
        });
    }
})()

//Create a new database;
const base1 = new BaseDeDatos();
base1.execute("SELECT * FROM persona WHERE id_persona = 1");