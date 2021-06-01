(function(window){
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
	window.Regular = Regular;
})(window)