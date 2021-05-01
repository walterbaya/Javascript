const URL_BASE = "http://localhost:3000";
const URI_USERS = "/users";
const URI_POSTS = "/posts";
const URI_COMMENTS = "/comments";

function peticion(url){
    const promesa = new Promise((resolve,reject)=>{
        const ajax = new XMLHttpRequest();
        ajax.open('GET', URL_BASE + url);
        ajax.addEventListener('load', e => {
            if(ajax.status == 200){
                resolve(JSON.parse(ajax.response));
            }
            else{
                reject("Falló la petición a" + url);
            }
        });
        ajax.send();
    });
    return promesa;
}

const promesaUsuarios = peticion(URI_USERS);
promesaUsuarios
    .then(users => {
        const idElegido = users[0].id;
        const promesaPosteos = peticion(URI_POSTS + '?userId=' + idElegido);
        return promesaPosteos;
    }) //, err =>())
    .then(posteos => {
        const idElegido = posteos[0].id;
        const promesaComentarios = peticion(URI_COMMENTS + '?postId=' + idElegido);
        return promesaComentarios;
    })
    .then(comentarios => {
        console.log(comentarios);
    })
    .catch(err => console.log(err));

//Los then y catch tienen prioridad, no se asocian a la cola de tareas
//sino que van a la cola especifica de promesas    
