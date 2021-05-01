const URL_BASE = "http://localhost:3000";
const URI_USERS = "/users";

fetch(URL_BASE + URI_USERS)
    .then(respuesta => {
        if(respuesta.status != 200){
            throw new Error("Error en ajax");
        }
        return respuesta.json();
    })
    .then(users => console.log(users))
    .catch(err => console.eror(err))

//El Fetch es mas rapido que cualquier callback