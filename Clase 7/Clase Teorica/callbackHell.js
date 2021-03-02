/*Las APIs son servicios que nos dan ciertos metodos, pueden estar escritos diferentes y usar distitos protocolos
si nosotros usamos el protocolo HTTP decimos que es un servicio api restFull, es decir nos permite obtener cierto tipo de
recursos */

const URL_BASE = "https://jsonplaceholder.typicode.com";
const URI_USERS = "/users";
const URI_POSTS = "/posts";
const URI_COMMENTS = "/comments";

//si le agrego a la url base la url usuario puedo acceder a los usuarios
//las api restfull usan protocolo http si o si para comunicarse
//tenemos que usar distintos verbos, segun como diga http
//GET estamos pidiendlo al servidor que nos entregue un recurso
//GET /users  le estoy pidiendo todos los usuarios
//GET /users?userId=1  le estoy pidiendo el usuario con id uno.
//con el GET solo estoy pidiendo informacion, o recurso.
//GET sirve solamente para pedir.

//para postear usamos post, POST /users, la accion que toma el servidor
//depende del verbo, como usamos POST, le estamos diciendo al servidor 
//que agregue un nuevo usuario, ademas deberemos agregar en la parte de body
//toda la informacion necesaria para que se cree el nuevo usuario.

//de momento usaremos solo get y post

//Si queremos hacer una edición
//PUT /users?userId=1 pisame el usuario que tenga id 1 con toda la info
//que te voy a proporcionar.

//PATCH es una variante, lo que hace es pisar solamente uno o dos datos,
//la diferencia es que con el PUT modificamos todo el objeto aunque solo 
//necesitemos modificar un dato, en cambio el patch lo que hace es parchar
//toma el objeto y solo reemplaza las propiedades que vienen por el send
//no pisa todos los datos del objeto, sino los que corresponde.

//DELETE borra simplemente lo que le digamos, por ejemplo si le pasamos
//DELETE /users?userId=1 borrara el usuario que tenga id=1

//vamos a estar haciendo ajax constantemente

//el objeto que dispara el evento load es el ajax

//Esto se llama infierno de los callbacks o piramide de la perdicion 
//o piramide maya.

function peticion(uri,callback){
	const xhr = new XMLHttpRequest();
	xhr.open("GET",URL_BASE + uri);
	xhr.addEventListener('load', callback);
	xhr.send()
}

peticion(URI_USERS, e => {
    const users = JSON.parse(e.target.response);
	const idElegido = users[4].id;

	peticion(URI_POSTS + "?userId=" + idElegido, e=>{
		const posteos = JSON.parse(e.target.response);
		console.log(posteos)
		const idElegido = posteos[0].id;

		peticion(URI_COMMENTS + "?postId=" + idElegido, e=>{
			const comments = JSON.parse(e.target.response);
			console.log(comments);
		});
	});
});

//Es un lio entender esto!!!!!!!!!!!, no hay una clara division 
//de las distintas etapas o distintos callbacks

//PROMESAS, para solucionar este infiernocallback