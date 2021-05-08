/*
Ejercicio 1
Crear un objeto literal bajo la variable usuario que contenga un método que va a ser compartido
por todos los objetos que se creen a partir de esa interfaz. 
*/
/*
let usuario = {
                darInformacion: value: function(){},
}
*/
/*
Ejercicio 2
Usar el método create del objeto Object para crear dos objetos cuyo prototipo sea un usuario.
*/
/*
let martha = Object.create(usuario);
let jose = Object.create(usuario);
*/
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
conteniendo todos los métodos de un nuevo prototipo, la idea parece ser agregar nuevas funciones al prototipo de nuevo
this ya tenia funciones.
*/

let empleado = {
    cobrarSalario: function(){
        console.log("Se cobro con exito, el salario");
    },
    empezarAtrabajar: function(){
        console.log("Se cobro con exito, el salario");
    }
}

function metodos(prototipo){
    let obj = {};
    for(m in prototipo){
        Object.defineProperty(obj, m, {value: prototipo[m]});
    }
    return obj;
}


let m1 = metodos(empleado);

let usuario = {
    crear: function(){
        //Objeto llamado nuevo, vacio con prototipo this, o sea el contexto de la funcion.
        let nuevo = Object.create(this);
        return nuevo;
    },
    extender: function(metodos){
        let nuevo = Object.create(this);
        //es decir va a tener todos los metodos que tiene un usuario y quiero extenderlo con mas.
        propiedades = Object.getOwnPropertyNames(metodos);
        for(propiedad in propiedades){
            Object.defineProperty(this, propiedades[propiedad], {value: metodos[propiedades[propiedad]]});       
        }   
        return nuevo;
    },
    darInformacion: function(){}
}

let martha = Object.create(usuario);
let jose = Object.create(usuario);



/*Ejercicio 5

Admitir un parámetro mas en el método extends llamado propiedades. Este deberá ser un Array
y puede contener únicamente String que van a ser el nombre de las propiedades que podemos
usar en las instancias que creemos usando este prototipo.

Ejercicio 6

Admitir un parámetro en el método create que sea de tipo Object. El mismo únicamente puede
contener los índices con nombres declarados en el punto anterior. Ej.: Si un prototipo lo creamos
con let subproto = Prototipo.extends({metodos:{...}},["prop1"]) no puedo hacer
subproto.create({"prop2":"test"}) pero si subproto.create({"prop1":"test"}) porque prop1 está
definida como propiedad en su prototipo.
*/

/*
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
*/