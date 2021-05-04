/*
Ejercicio 1
Crear un objeto literal bajo la variable usuario que contenga un método que va a ser compartido
por todos los objetos que se creen a partir de esa interfaz. 
*/
/*
let usuario = {
                darInformacion: function(){}
            }
*/
/*
Ejercicio 2
Usar el método create del objeto Object para crear dos objetos cuyo prototipo sea un usuario.
*/

//let martha = Object.create(usuario);
//let jose = Object.create(usuario);

/*
Ejercicio 3
Crear dos métodos adicionales en el objeto usuario que se llamen crear y extender. Cada
función debe retornar una instancia de un objeto nuevo vacío cuyo prototipo sea el contexto de
la misma función. */
/*
let usuario = {
    crear: function(){
        //Objeto llamado nuevo, vacio con prototipo this, o sea el contexto de la funcion.
        let nuevo = Object.create(this);
        return nuevo;
    },
    extender: function(){
        let nuevo = Object.create(this);
        return nuevo;
    },
    darInformacion: function(){}
}

let martha = Object.create(usuario);
let jose = Object.create(usuario);

*/
/*
Ejercicio 4
Admitir un parámetro en el método extends llamado metodos que deberá ser un Object
conteniendo todos los métodos de un nuevo prototipo. 
*/

let usuario = {
    crear: function(){
        //Objeto llamado nuevo, vacio con prototipo this, o sea el contexto de la funcion.
        let nuevo = Object.create(this);
        return nuevo;
    },
    extender: function(metodos){
        let nuevo = Object.create(this);
        return nuevo;
    },
    darInformacion: function(){}
}

let martha = Object.create(usuario);
let jose = Object.create(usuario);
