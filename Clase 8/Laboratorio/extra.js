/**-USUARIO :
 Métodos
 -create : De los puntos anteriores pero con los nuevos métodos y propiedades. La
propiedad status debe ser False por defecto.
 -extends : De los puntos anteriores pero con los nuevos métodos y propiedades
 -setInfo : Actualiza la información del usuario solo si es admin
 -getInfo : Devuelve la información del usuario
 Props
 -username : String
 -email : String
 -password : String
 -status : Boolean - Determina si está activo o no
 */

let USUARIO = {
    username: undefined,
    email: undefined,
    password: undefined,
    status: false,
    create: function (obj) {
        let nuevo = Object.create(this);
        let propertiesObj = Object.getOwnPropertyNames(obj);
        let propertiesNuevo = Object.getOwnPropertyNames(this);
        for (var i = 0; i < propertiesObj.length; i++) {
            if (propertiesNuevo.includes(propertiesObj[i])) {
                nuevo[propertiesObj[i]] = obj[propertiesObj[i]];
            }
        }
        return nuevo;
    },
    extends: function (metodos, property) {
        let nuevo = Object.create(this);
        //es decir va a tener todos los metodos que tiene un usuario y quiero extenderlo con mas.
        let propiedades = Object.getOwnPropertyNames(metodos);
        for (propiedad in propiedades) {
            nuevo[propiedades[propiedad]] = metodos[propiedades[propiedad]];
        }
        for (var i = 0; i < property.length; i++) {
            Object.defineProperty(nuevo, property[i], {
                value: undefined,
            });
        }
        return nuevo;
    },
    get Info() {
        return [this.username, this.email, this.password, this.status];
    },
    set Info(x) {
        if (this.status) {
            for (const elem in x) {
                Object.defineProperty(this, elem, {
                    value: x[elem],
                });
            }
        }
    }
};



let usr = USUARIO.create({
    'username': 'joselito',
    'status': false
});



/*
 -ADMIN :
 Métodos
 -activateUser : Le puede activar el status a cualquier usuario.
 -removesUser : Le cancela el status a cualquier usuario.
 Props
 -adminId : Number
*/

let ADMIN = USUARIO.extends({
        //-registerUser : Igual a create pero ya le asigna un status True
        'registerUser': function (obj) {
            obj.status = true;
            return USUARIO.create(obj);
        },
        'activateUser': function (usr) {
            usr.Info = {
                'status': true
            }
        },
        'removesUser': function (usr) {
            usr.Info = {
                'status': false
            }
        }
    },
    ['adminId']);

let administrador = ADMIN({
    
});

/*
 -REGULAR :
 Métodos
 -saludar : Usa su nombre de usuario para mostrar un mensaje por consola
 -updateInfo : Cambia la información válida para un usuario regular como nombre y apellido
 Props
 -nombre : String
 -apellido : String
*/

let REGULAR = USUARIO.extends({
    'saludar': function () {
        console.log("Bienvenido: " + this.username);
    },
    'updateInfo': function (obj) {
        for (const elem in obj) {
            Object.defineProperty(this, elem, {
                value: obj[elem],
            });
        }
    }
}, ['nombre', 'apellido']);

let nuevo = REGULAR.create({
    'username': 'regu'
});
/* -GUEST :
 Métodos
 -ninguno : Tiene todos los demás métodos restringidos
 Props
 -guestId : Number */