//Promesas para no anidar callbbacks
//la promesa va  a ser un valor, pero no sabemos si el valor es lo valido o fallado.

//pending fullfiled rejected
let promesa = new Promise((resolver,rechazar)=>{
	//resolver(1);
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'info.txt')
	xhr.addEventListener('load',()=>{
		if(xhr.status == 200){
			resolver(xhr.response);
		}
	});
	xhr.send();
});

//una vez que la promesa cmambia de valor ya no puede volver a cambiar.

promesa
	.then((valor)=>{
	console.log('Promesa 1 resuelta', valor);
	return new Promise();
})
	.catch(s()=>{
	console.log('Promesa Rechazado');
})