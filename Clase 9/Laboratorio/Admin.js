(function(window){
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
 	window.Admin = Admin;
})(window)