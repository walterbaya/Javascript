
//Realizo la captura de los links que van a permitir cambiar el contenido de la pagina y del main que es donde voy a poner el contenido.
let links = document.querySelectorAll("a");
let main = document.querySelector("main");

//Esto es para que cada vez que se reinicie la pagina tengamos el html cargado
//sino no aparece el home por defecto cargado.
let pagina_inicial = ajax("home.html");
pagina_inicial.addEventListener("load", ()=>{
	if(pagina_inicial.status == 200){
		main.innerHTML = pagina_inicial.response;
	}
});
/*
//Tomamos cada link y le ponemos un add even listener de tipo click, de manera que cuando clickee alguno lo que haga es ejecutar
//lo interior
links.forEach(link => {
	link.addEventListener("click", (e)=>{
		//e.target.id

		//Obtengo el id del link, el mismo mas la palabra .html sera lo que necesite para meter en la funcion ajax
		//o sea el la url buscada sera id + ."html"
		let id = link.id;
		let archivo = id + ".html";
		//se ejecuta la funcion ajax
		let xhr = ajax(archivo);
		//una vez que el elemento ajax se obtenga, es decir se haya cargado
		xhr.addEventListener("load", ()=>{
			//verificamos que el recurso se haya obtenido correctamente
			if(xhr.status == 200){
				//guardamos el contenido de respuesta dentro del main, el mismo sera contenido html
				main.innerHTML = xhr.response;
			}
		})
	});
});
*/
//La funcion ajax solicita un recurso a partir de su URL y su metodo, devolviendo finalmente la referencia al objeto xhr
//el mismo contiene toda la informacion necesaria relacionada con el recurso, en particular contiene el contenido HTML necesitado para meter dentro
//de main
function ajax(url, method){
	//si no recibe metodo asumimos por defecto que es get
	let http_metodo = method || "get";
	let xhr = new XMLHttpRequest;
	xhr.open(http_metodo, url);
	xhr.send();
	//devuelvo el objeto XHR entero ya que solo la
	//respuesta no se puede devolver
	return xhr;
}


//Paginas tipo SPA, el problema de navegacion consiste en que cuando volvemos atras o compartimos una url, siempre se nos recarga home
//no podemos volver atras porque no hay nada y tampoco se actualiza en la barra de navegacion los datos segun la pagina
//para esto necesitamos usar la web api history.

//NO SE PUEDE GENERAR UN NUEVO HISTORIAL, SE TRABAJA CON EL YA EXISTENTE.
//LENGTH dice cuantos links estuve visitando o navegando
//PROTO para controlar manualmente el historial
//history.go(cantidadDePasosHaciaAdelante)
//pushstate general nuevo historial, toma como parametros posibles 
/*el estado de navegacion, puede quedar en null, un titulo(el que se le va a asignar a las paginas), tambien se puede poner en null
y el tercer parametro es la url que va a dirigir a la ubicacion, cambia lo que dice en la url, pero es solo de forma ficticia, 
sirve para configurar el historial principalmente.*/

//UTILIZACION DEL HASH DE LA URL
/*window.location nos da propiedades sobre nuestra ubicacion actual
  por defecto el location.hash siempre esta vacio, en esta variable si le asignamos algo va a ser similar al push state del historial
  Si le agregamos algo se agrega en la barra de navegacion, y tambien registra un nuevo salto en el historial incrementando el length
  */

/*
links.forEach(link => {
	link.addEventListener("click", (e)=>{
		//NO OLVIDARSE DEL PREVENTDEFAULT
		e.preventDefault();
		let id = link.id;
		location.hash = link.id;
	});
});


window.addEventListener("hashchange", () => {
	let archivo = location.hash.split("#")[1] + ".html";
	console.log(location.hash);
	let xhr = ajax(archivo);
	
	xhr.addEventListener("load", () => {	
		if(xhr.status == 200){
			main.innerHTML = xhr.response;
		}
	});
		
});
*/
/*
//UTILIZANDO HISTORY, CREO QUE ES LO MEJOR PORQUE GENERA URLS LIMPIAS.
links.forEach(link => {
	link.addEventListener("click", (e)=>{
		e.preventDefault();
		//e.target.id
		//Obtengo el id del link, el mismo mas la palabra .html sera lo que necesite para meter en la funcion ajax
		//o sea el la url buscada sera id + ."html"
		let id = link.id;
		let archivo = id + ".html";
		history.pushState(null,"",id);
		let xhr = ajax(archivo);
		xhr.addEventListener("load", ()=>{

			if(xhr.status == 200){
				main.innerHTML = xhr.response;
			}
		});
	});
});

//Location cuenta con un pathname que seria lo que esta escrito en la barra de busqueda.

window.addEventListener("popstate",()=>{
	if(location.pathname == "/"){
		location.pathname = "home";
	}
		let archivo = location.pathname.split("/")[1] + ".html";
		let xhr = ajax(archivo);
	
	xhr.addEventListener("load", ()=>{
		if(xhr.status == 200){
			main.innerHTML = xhr.response;
		}
	});
});

*/

//USANDO EL CACHE COMO RECURSO PARA CONSTRUIR EL DOM, PARA QUE SEA MAS RAPIDO Y SE CONSUMAN MENOS RECURSOS.

links.forEach(link => {
	link.addEventListener("click", (e)=>{
		e.preventDefault();
		//e.target.id
		//Obtengo el id del link, el mismo mas la palabra .html sera lo que necesite para meter en la funcion ajax
		//o sea el la url buscada sera id + ."html"
		let id = link.id;
		let archivo = id + ".html";
		let xhr = ajax(archivo);
		xhr.addEventListener("load", ()=>{

			if(xhr.status == 200){
				main.innerHTML = xhr.response;
                //guardamos en el historial el objeto response obtenido
                history.pushState({
                	template : xhr.response
                },"",id);
			}
		});
	});
});

window.addEventListener("popstate",(e)=>{
	console.log(e.state);
	if(e.state.template){
		main.innerHTML = e.state.template;
	}
	else{
		let archivo = location.pathname.split("/")[1] + ".html";
		let xhr = ajax(archivo);
	
	xhr.addEventListener("load", ()=>{
		if(xhr.status == 200){
			main.innerHTML = xhr.response;
		}
	});
	}

});
