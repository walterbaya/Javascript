function Usuario(opciones) { //Abstract Class,
    // recurrimos a un nombre que por convencion demuestre que no debe ser instanciado
    /*Por ejemplo _Usuario es una posibilidad */
    this.nombre = opciones.nombre;
    this.clave = opciones.clave || 'abc123';
}

Usuario.prototype.presentarse = function () {
    console.log("Soy " + this.nombre);
}

Usuario.prototype.login = function () {
    console.log("login... " + this.nombre);
}

//-----------------------------------------------
function Programador(opciones) {
    //Llamaos al super o sea al constructor de la superclase
    //Composición de propiedades
    Usuario.call(this, opciones);
    this.lenguaje = opciones.lenguaje;
    this.nivelCafe = opciones.nivelCafe || 0;
}

//Herencia clásica de métodos
Programador.prototype = Object.create(Usuario.prototype);
//Permite mantener el tipo sino se queda con el constructor superior
//de Usuario
Programador.prototype.constructor = Programador;

//Metodos propios del programador
Programador.prototype.programar = function () {
    if (this.nivelCafe > 30) {
        console.log("Programando en " + this.lenguaje);
    } else {
        console.log("Necesito más café");
    }
}

//-----------------------------------------------


/*
const user1 = new Usuario({
    nombre: "Juan";
});

*/

const prog1 = new Programador({
    lenguaje: "PHP",
    nivelCafe: 45
})

prog1.presentarse();