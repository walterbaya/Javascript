const BDTIGRE = (function () {
    "use strict";

    let instancia = null;

    class BaseDatos {
        constructor(host, user, pass, dbname) {
            //Evitamos la generación de una nueva instancia  
            this.host = host;
            this.user = user;
            this.pass = pass;
            this.dbname = dbname;

            instancia = this;
        }
        conectar() {
            console.log("Conectando...", this.host, this.dbname);
        }
        consultar(query) {
            console.log(query);
        }
    }

    //Si solo puede haber una conexion debido a que el servidor esta limitado.
    return {
        crearBD: function (host, user, pass, dbname) {
            if (instancia) {
                return instancia;
            } else {
                return new BaseDatos(host, user, pass, dbname);

            }
        }
    }
})();