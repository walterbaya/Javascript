//Las funciones son objetos.

function fabrica(nombre,color){
    var funcionPersonalizada = function(frase){

    }   
    return funcionPersonalizada; 
}

var comentarVendedor = fabrica("vendedor", "red");
var comentarHomero = fabrica("Homero", "blue");

//En console log podemos poner una cadena, que si empieza
//con el valor %c, significa que lo siguiente va a ser una
//cadena con estilos css.