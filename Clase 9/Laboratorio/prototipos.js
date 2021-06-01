/*
Ejercicio 1
Crear un objeto literal bajo la variable usuario que contenga un método que va a ser compartido
por todos los objetos que se creen a partir de esa interfaz. 
*/

class usuario {
        darInformacion: value: function(){},
}

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

/*Ejercicio 5

propiedades que podemos
usar en las instancias que creemos con este prototipo.
Por ejemplo si creo un usuario tiene ninguna propiedad
si yo le agrego propiedades a usuario, luego los objetos que defina a partir de usuario van a tener las mismas
usuario.extender(metodos,propiedades) le agrega propiedades y metodos a usuario.

*/
/*
let empleado = {
    cobrarSalario: function () {
        console.log("Se cobro con exito, el salario");
    },
    empezarAtrabajar: function () {
        console.log("Se cobro con exito, el salario");
    }
}

function metodos(prototipo) {
    let obj = {};
    for (m in prototipo) {
        Object.defineProperty(obj, m, {
            value: prototipo[m]
        });
    }
    return obj;
}


let m1 = metodos(empleado);

let usuario = {};

Object.defineProperties(usuario, {
    'getInformation': {
       value: function () {}
    },
    'create': {
        value: function () {
            //Objeto llamado nuevo, vacio con prototipo this, o sea el contexto de la funcion.
            let nuevo = Object.create(this);
            return nuevo;
        }
    },
    'extends': {
        value: function (metodos, property) {
            let nuevo = Object.create(this);
            //es decir va a tener todos los metodos que tiene un usuario y quiero extenderlo con mas.
            let propiedades = Object.getOwnPropertyNames(metodos);
            for (propiedad in propiedades) {
                Object.defineProperty(nuevo, propiedades[propiedad], {
                    value: metodos[propiedades[propiedad]]
                });
            }
            for (var i = 0; i < property.length; i++) {
                Object.defineProperty(nuevo, property[i] ,{
                    value : null
                });
            }
            return nuevo;
        }
    }
});

//Extends permite crear una instancia que tiene como prototipo a this
//y ademas le agregamos nuevas funcionalidades las cuales tambien son todas no enumerables, no configurables...etc
let user = usuario.extends(m1, ["Altura", "Peso"]);
//De esta forma user es otro prototipo



*/

/*
Ejercicio 6

Admitir un parámetro en el método create que sea de tipo Object. El mismo únicamente puede
contener los índices con nombres declarados en el punto anterior. Ej.: Si un prototipo lo creamos
con let subproto = Prototipo.extends({metodos:{...}},["prop1"]) no puedo hacer
subproto.create({"prop2":"test"}) pero si subproto.create({"prop1":"test"}) porque prop1 está
definida como propiedad en su prototipo.
*/

/*
let empleado = {
    cobrarSalario: function () {
        console.log("Se cobro con exito, el salario");
    },
    empezarAtrabajar: function () {
        console.log("Se cobro con exito, el salario");
    }
}

function metodos(prototipo) {
    let obj = {};
    for (m in prototipo) {
        Object.defineProperty(obj, m, {
            value: prototipo[m]
        });
    }
    return obj;
}


let m1 = metodos(empleado);

let usuario = {};

Object.defineProperties(usuario, {
    'getInformation': {
        value: function () {}
    },
    'create': {
        value: function (obj) {
            let nuevo = Object.create(this);
            let propertiesObj = Object.getOwnPropertyNames(obj);
            let propertiesNuevo = Object.getOwnPropertyNames(this);
            for (var i = 0; i < propertiesObj.length; i++) {
                if (propertiesNuevo.includes(propertiesObj[i])) {
                        Object.defineProperty(nuevo, propertiesObj[i], 
                        { 
                            value: obj[propertiesObj[i]],
                            writable: true,
                            enumerable: true,
                            configurable: false
                        });
                    }
            }
            return nuevo;
        }
    },
    'extends': {
        value: function (metodos, property) {
            let nuevo = Object.create(this);
            //es decir va a tener todos los metodos que tiene un usuario y quiero extenderlo con mas.
            let propiedades = Object.getOwnPropertyNames(metodos);
            for (propiedad in propiedades) {
                Object.defineProperty(nuevo, propiedades[propiedad], {
                    value: metodos[propiedades[propiedad]]
                });
            }
            for (var i = 0; i < property.length; i++) {
                Object.defineProperty(nuevo, property[i], {
                });
            }
            return nuevo;
        }
    }
});


let user = usuario.extends(m1, ["Nombre", "Apellido"]);
console.log(user);
let user1 = user.create({
    "Nombre": "Joselindo",
    "Apellido": "Fernandez",
});
*/

/**Ejercicio 1
Crear prototipos para usuarios del tipo Admin , Regular y Guest que contengan propiedades
como :
-USUARIO :
 Métodos
 -setInfo : Actualiza la información del usuario solo si es admin
 -getInfo : Devuelve la información del usuario
 */

/*
 -ADMIN :
 Métodos
 -registerUser : Igual a create pero ya le asigna un status True
 -activateUser : Le puede activar el status a cualquier usuario.
 -removesUser : Le cancela el status a cualquier usuario.
 Props
 -adminId : Number
 -REGULAR :
 Métodos
 -saludar : Usa su nombre de usuario para mostrar un mensaje por consola
 -updateInfo : Cambia la información válida para un usuario regular como nombre y
apellido
 Props
 -nombre : String
 -apellido : String
 -GUEST :
 Métodos
 -ninguno : Tiene todos los demás métodos restringidos
 Props
 -guestId : Number */