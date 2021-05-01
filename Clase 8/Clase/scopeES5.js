//Variables globales

var a = 100;
var z = 9;
externa(80);

//Las variables globales ensucian window, forman parte de la misma
//pueden llamarse por ejemplo usando window.a
//window.z 
//window.externa
//Eso pasa solo cuando hacemos var o hacemos funciones de la
//forma clasica.

//-----------------------------------------
function externa(c){
    var b = 10;
    var z = 99999;

    //b,z solo existen dentro del cuerpo de la funcion donde fueron definidas
    //no pueden usarse fuera de la misma
    //no se pueden usar en otras funciones que no esten dentro del cuerpo de la funcion

    //javascript entiende que hay un window delante 
    //lo que entiende javascript con esto es window.w = "hola"
    //sin querer se crea una global y se podra usar afuera aunque fue creada adentro
    
    w = "hola";
    console.log(a,b,c,z);
    interna(9);

    //-------------------
    //Esta funcion solo puede ser accedida dentro de externa
    //no se puede acceder a esta función desde fuera

    function interna(t){
        var g = 40;
        console.log(g, t);
        console.log(a, b); //b es un closure puedo acceder por esto
        console.log("local z externa", z);
        //estoy leyendo z con valor 99999
        console.log("global z", window.z);
    }
}


