//La api rest no se diferencia practicamente en nada con la api rest
//JSONPlaceholder sera la api rest con la que estaremos trabajando.

/*
let xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/users");
xhr.addEventListener("load", () => {
	if(xhr.status == 200){
		let respuesta = JSON.parse(xhr.response);
		console.log(respuesta);
	}
});
xhr.send();
*/
//HEADERS DE AUTORIZACION
/*cada vez que establecemos la conexion con un servidor hay una politica de seguridad en medio
eso nos asegura que no cualquier persona puede consumir cosas de nuestro servidor siempre desde afuera a traves
de la red, la politica dice que se envian headers que aseguran que somos quienes somos y que tenemos acceso a los
recursos que queremos consumir

se llaman 
CORS habilidad de compartir recursos a traves de dominios, siempre se usa cuando pedimos cosas
fuera de nuestro protocolo, dominio o puerto*/
//acces-control-allow-origin: nos dice quien tiene acceso a que recurso, si vemos lo que nos devolvio
//vemos que devuelve http://localhost, dice que nosotros tenemos acceso para consumir esa api.
//acces-control-allow-origin: *  si vuelve con esto quiere decir que cualquier cliente tiene acceso a ese recurso.

//El servidor puede decidir quien tiene acceso y quien no, para saber si necesita previa autenticacion nuestra para poder consumir ese recurso.


let xhr = new XMLHttpRequest();
let url = "https://glosbe.com/gapi/translate?from=es&dest=en&phrase=hola&format=json&callback=unCallback";
xhr.open("get",url);
xhr.addEventListener("load", () => {
	if(xhr.status == 200){
		let respuesta = JSON.parse(xhr.response);
		console.log(respuesta);
	}
});

xhr.addEventListener("error", () => {
	let script = document.createElement("script");
	script.src = `${url}&callback=algunCallback`;
	document.body.appendChild(script);
});
xhr.send();

function algunCallback(resultado){
	console.log(resultado);
}

//con jsonp podemos sobrepasar el problema de cors. nos anida el recurso en una funcion
//ya que si no tenemos permitido llegar en nuestro recurso, los script pueden ir a buscar 
//recursos externos.