//En javascript 6 vamos a evitar tener todo separado.

class Usuario {
    constructor(opciones) {
        this.nombre = opciones.nombre;
        this.clave = opciones.clave || 'abc123';
    }

    //Todas las funciones irán en usuario prototype
    presentarse = function () {
        console.log("Soy " + this.nombre);
    }

    login = function () {
        console.log("login... " + this.nombre);
    }
}

const usr1 = new Usuario({
    nombre: "Nico"
});