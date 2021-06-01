//funcion constructora

function Usuario(username, email, clave){
    this.username = username;
    this.email = email;
    this.clave = clave;
}

const user1 = new Usuario("ana", "ana@email.com", "xyz689");

//this es window.
//luego estoy agrandando a window  
//pero voy a usar new para que quien llame a usuario sea un objeto nuevo.
//con new crea un nuevo objeto sin ensuciar window

/*
new(){
    //crea un objeto auxiliar vacio
    const aux = {};
    Usuario.call(aux, "ana",....);
    return aux;
}

asi masomenos se crea un nuevo objeto.
*/

//El nombre de la funcion queda como el tipo.