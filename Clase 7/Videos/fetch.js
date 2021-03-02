//Hace un pedido asincronico por get
let texto = fetch('info.txt')

texto.then(valor => {
	//valor => response
	return valor.text()
})
.then(valor => {
	//valor => response
	console.log(valor)
})

let url = 'https://jsonplaceholder.typicode.com';

let primer_pedido = fetch(`${url}/users`);

primer_pedido
	.then(valor => valor.json())
	 //Promise{}
	 .then(valor => {
	 	let usuario_id = valor[4];
	 	fetch(`${url}/posts?userId=${usuario_id}`);	
	 })
	 .then(valor => valor.json())
	 .then(valor => {
	 	console.log(valor)
	 })
	.catch(err => {
		console.log(err);
	})