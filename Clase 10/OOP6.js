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

//Con el extends lo que hacemos es decir que Programador extiende de Usuario

class Programador extends Usuario{
    constructor(opciones) {
        /**
         * Lo que hace javascript es definir una palabra
         * que se llama super y super es
         * const super = Usuario.bind(this);
         */
        super(opciones);
        this.lenguaje = opciones.lenguaje;
        this.nivelCafe = opciones.nivelCafe;
    }

    programar = function () {
        if (this.nivelCafe > 30) {
            console.log("Programando en " + this.lenguaje);
        } else {
            console.log("Necesito más café");
        }
    }
}