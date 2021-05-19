/**Se podría conseguir utilizando una función */

//Dentro de las class está el modo estricto aunque de forma implicita.

const MODULOPANDA = (function auxiliar() {
    //La línea use strict no me permite ensuciar el window.
    "use strict";
    //modo estricto sirve para obtener errores profesionales que antes
    //no tenía 
    var aux = 0;
    //Si no le pongo var esto es global ya que es lo mismo que window.result
    //Esto ensucia el window
    var result = 100;
    return {
        sumar: function sumar(a, b) {
            console.log(aux);
            return a + b;
        },
        restar: function restar(a, b) {
            console.log(aux);
            return a - b;
        }
    };
})();

/**
 * La libreria debe tener un nombre
 */

//retorna un objeto que tiene todas las funciones de la librería

//IIFE declarar y llamar a una funcion una unica vez

//cuando se termine de ejecutar ya no estara en memoria
/*(function(){
    return{};
})();*/