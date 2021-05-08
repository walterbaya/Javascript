function crearUsuario(username, email, clave){
    return {
        username: username,
        email: email,
        clave: clave
    }
}

const user1 = crearUsuario("pepe", "pepe@email.com", "123");
const ana = crearUsuario("ana", "ana@email.com", "166");

//Tiene problemas esta manera para manejar la herencia, para eso vamos a ver otra manera mejor.
