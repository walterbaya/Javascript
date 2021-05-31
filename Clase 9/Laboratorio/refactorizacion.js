/**Ejercicio 3
Refactorizar los prototipos creados en el laboratorio de la clase anterior para los tipos de
usuarios pero usando funciones constructoras.*/


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


class Usuario{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.status = false;       
    }
    create(obj) {
        let nuevo = Object.create(this);
        let propertiesObj = Object.getOwnPropertyNames(obj);
        let propertiesNuevo = Object.getOwnPropertyNames(this);
        for (var i = 0; i < propertiesObj.length; i++) {
            if (propertiesNuevo.includes(propertiesObj[i])) {
                nuevo[propertiesObj[i]] = obj[propertiesObj[i]];
            }
        }
        return nuevo;
    }
    extends (metodos, property) {
        let nuevo = Object.create(this);
        //es decir va a tener todos los metodos que tiene un usuario y quiero extenderlo con mas.
        let propiedades = Object.getOwnPropertyNames(metodos);
        for (propiedad in propiedades) {
            nuevo[propiedades[propiedad]] = metodos[propiedades[propiedad]];
        }
        for (var i = 0; i < property.length; i++) {
            Object.defineProperty(nuevo, property[i], {
                value: undefined,
                enumerable: true,
                configurable: true,
                writable: true
            });
        }
        return nuevo;
    }

    getInfo(){
        return [this.username, this.email, this.password, this.status];
    }
    setInfo(x){
        if (this.status) {
            for (const elem in x) {
                Object.defineProperty(this, elem, {
                    value: x[elem],
                });
            }
        }
    }

}


/*
 -ADMIN :
 Métodos
 -registerUser : Igual a create pero ya le asigna un status True
 -activateUser : Le puede activar el status a cualquier usuario.
 -removesUser : Le cancela el status a cualquier usuario.
 Props
 -adminId : Number
*/

//ADMIN es un objeto que extiene de usuario con algunas propiedades definidas
//register user crea un ADMIN o sea un objeto que tiene status true.
//su prototipo debe ser ADMIN y el prototipo de ADMIN es USUARIO


class Admin extends Usuario{
    constructor(username, email, password, adminId){
        super(username,email,password)
        this.adminId = adminId;
        this.status = true;
    }
    registerUser(obj) {
        //ADMIN debe ser el prototipo
        let nuevo = Object.create(this);
        let propertiesObj = Object.getOwnPropertyNames(obj);
        let propertiesNuevo = Object.getOwnPropertyNames(this);
        let propertiesPrototipe = Object.getOwnPropertyNames(this.__proto__);
        propertiesNuevo = propertiesNuevo.concat(propertiesPrototipe); 
        for(var i = 0; i < propertiesObj.length; i++) {
            if (propertiesNuevo.includes(propertiesObj[i])) {
                nuevo[propertiesObj[i]] = obj[propertiesObj[i]];
            }
        }
        nuevo.status = true;
        return nuevo;
    }
    activateUser(usr) {
        usr.status = true;
    }
    removesUser(usr) {
        usr.status = false;
    }    
}

let administrador = new Admin("Joselindo","joselindo@yahoo.com","josejoselindolindo", 25);

/*
 -REGULAR :
 Métodos
 -saludar : Usa su nombre de usuario para mostrar un mensaje por consola
 -updateInfo : Cambia la información válida para un usuario regular como nombre y apellido
 Props
 -nombre : String
 -apellido : String
*/

class Regular extends Usuario{
    constructor(username,email, password, nombre, apellido){
        super(username,email,password);
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log("Bienvenido: " + this.username);
    }
    updateInfo(obj) {
        for (const elem in obj) {
            Object.defineProperty(this, elem, {
                value: obj[elem],
            });
        }
    }
}

let nuevo = new Regular("Joselindo2", "Joselindo2@gmail.com", "josejoselindo22", "Jose", "Ramirez Perlas");

class Guest extends Usuario{
    constructor(username,email, password,guestId){
        super(username,email,password);
        this.guestId = guestId;
    }
}

let guest = new Guest("Joselindo2", "Joselindo2@gmail.com", "josejoselindo22",134);
