var BaseDeDatos;

(function () {

    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "astinm345"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    BaseDeDatos = function () {
        if (con) {
            return con;
        }
        ejecutarQuery: function(sql) {
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
        }
    }



})()