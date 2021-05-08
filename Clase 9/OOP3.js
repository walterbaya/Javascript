//funcion constructora

/**La funcion tiene como prototype el Usuario.prototype sirve para crear por medio de new
 * distintas instancias, estas instancias tendran nombre y clave 
    nacieron con new usuario, luego toman el prototype de usuario.
    el prototype sirve como prototipo para todas las instancias que se cran a partir
    de la funcion constructora, el proto apunta al prototype.
    luego si nosotros le agregamos funciones todas las instancias no lo van a tener
    pero lo van a buscar en el prototipo y entonces podran usarla
*/


function Usuario(username, email, clave){
    this.username = username;
    this.email = email;
    this.clave = clave;
    //Lo ideal es que todas las funciones esten repetidas
    //no tiene sentido definir cada una cada vez.
    //la idea es reutilizar la funcion, quiero otro objeto a parte.
}

Usuario.prototype.presentarse = function(){console.log("Soy " + this.username);};

/**Las funciones tienen como prototype el Function.prototype 
 *Prototype tiene cada funcion, el prototype es un objeto vacio,
 que lo unico que tiene es una propiedad llamada constructor que apunta
 hacia la misma funcion y ademas tenemos un objeto llamada .prototype que
 lo unico que tiene es un proto que apunta a Object.prototype */




const user1 = new Usuario("ana", "ana@email.com", "xyz689");
