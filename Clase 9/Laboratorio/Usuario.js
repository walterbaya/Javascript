
(function(window){

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

    static obtenerPropiedades(obj){
        let propiedades = Object.getOwnPropertyDescriptors(obj);
        return propiedades;
    }

}

    window.Usuario = Usuario;
}
)(window);

