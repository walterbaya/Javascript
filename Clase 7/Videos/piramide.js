let url = "https://jsonplaceholder.typicode.com";
btn.addEventListener('click', () => {

});

//Piramide de la perdición

btn.addEventListener('click', ()=>{
	ajax({
		metodo : 'GET',
		url : `${url}/users`
		load: primerCallback
	});
});

let primerCallback =  respuesta => {
	let usuario = respuesta[4];
	let id_usuario = usuario.id;
	ajax({
		metodo : 'GET',
		url : `${url}/posts?userId=${id_usuario}`,
		load : 
	});
}	

let segundoCallback = posteos => {
	posteos.forEach(post => {
	ajax({
		metodo : 'GET',
		url : `${url}/comments?postId=${post.id}`,
		load : comentarios => {
		console.log(comentarios);
		}
	});
});
}

//Etc....

function ajax(config){
	let xhr = new XMLHttpRequest();
	xhr.open(config.metodo, config.url);
	xhr.addEventListener('load',() => {
		if(xhr.status == 200){
			config.load(JSON.parse(xhr.response));
		}
	})
	xhr.send(config.data)
}
