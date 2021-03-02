//Una promesa es algo que puede o no cumplirse a futuro
//el objeto promise representa la promesa de que se cumplira o no
//una accion asincrona, algo que 

//Promesa de que en ALGUN momento voy a tener usuario


const URL_BASE = "https://jsonplaceholder.typicode.com";
const URI_USERS = "/users";
const URI_POSTS = "/posts";
const URI_COMMENTS = "/comments";


/*Funciones que vienen por defecto*/
const promUsers = new Promise(function(resolve,reject){
	//Accion asincrona
	const xhr = new XMLHttpRequest();
	xhr.open('GET', URL_BASE + URI_USERS);
	xhr.addEventListener('load', e => {
		if(xhr.status == 200){
			//console.log("ok")
			/*Al ejecutarse resolve cambia el estado de la
			promesa a resolve*/
			/*Una vez resuelta la peticion al servidor*/
			let users = JSON.parse(xhr.response);
			resolve(users);
		}
		else{
			//console.log("error");
			/*Al ejecutarse resolve cambia el estado de la
			promesa a rechazado*/
			reject();
		}	
	});
	xhr.send();
});

console.log(promUsers)

//El then nos dice una vez que la promesa este resuelta 
//lo que esta dentro del then

promUsers.then((users)=>{
	console.log("RESUELTA!!!", users);
})

//El catch se usa para lo contrario, es decir si la promesa falla
promUsers.catch((err)=>{
	console.log("FALLO!!!", err);
})

/*Tienen tres posibles estados, pending el inicial o sea pendiente
lo cual significa que si se cumple la promesa, el estado debe cambiar
a resolve, de lo contrario , sino se cumple es rejected y esos son
los tres posibles estados que tiene un objeto promesa*/

/*El then y el catch son los que permiten a partir de ellos 
obtener las cosas, el then en realidad, el catch permite 
informar que hubo un error.*/

/*Generalmente las promesas se escriben así*/

promUsers
	.then((users)=>{
	console.log("RESUELTA!!!", users);
	})
	.catch((err)=>{
	console.log("FALLO!!!", err);
	})

/*Cola de promesas o de microtareas

las microtareas se ejecutan cuando se terminaron las tareas
son VIP es decir tienen privilegios antes de otras cosas
en el flujo del eventloop*/