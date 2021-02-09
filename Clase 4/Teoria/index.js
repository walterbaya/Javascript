//Asincronía vs Sincronía

//nos permite ejecutar lineas de codigo despues
//de intervalos de tiempo
/*
setTimeout(()=>{
  console.log("Hola");
}, 2000);

//Las asincronicas no retornan un valor, ya
//que no se sabe cuando ni como ni si va a retornar
//un valor.

//La funcion hermana es set interval que da un
//retorno pero no es el resultado de lo que se este
//ejecutando en su interior.

//Funcion sincronica o bloqueante
console.log(1);
console.log(2);
console.log(3);
console.log(4);

/*----------------------------------*/


//XHR o AJAX


/*Permite transferir informacion de una maquina
hacia la otra de manera sincronica.
para todo esto es indispensable entender el protocolo
http,  protocolo estandar de transferencia a traves
de la www*/

/*USAR LA PESTAÑA NETWORK PARA LA ASINCRONIA.

todo se trae gracias al http


Cliente_servidor

body - headers entre otras definiciones
mas que entran dentro del protocolo

HEADERS: informacion especifica sobre la solicitud
que estuvimos haciendo, por ejemplo el metodo.

RESPUESTA DEL SERVIDOR: con un codigo de acceso
codigo 200 es el bueno 404 es que no se encontro
un recurso.

HEADERS-REQUEST-RESPONSE: son los headers que estamos
enviando y recibiendo del servidor.


*/

/*HEADERS

es meta informacion, informacion que vemos a veces
no

content-length: determina la dimension del recurso
que fuimos a solicitar en bytes.

content-type: que tipo de recurso nos esta llegando
por ejemplo si pedimos una imagen nos llegara algo
del tipo image/jpg image/png

o si pedimos un HTML llegara  text/html


*/




/*XMLHttpRequest / XHR / AJAX

*/

//Hacemos una copia del objeto en la variable
let xhr = new XMLHttpRequest;
console.log(xhr.readyState);

//readyState, xhr es un cartero, el readystate nos dice el
/*estado en el que esta nuestro cartero si llego, si volvio
0 - es objeto instanciado
1 - el objeto recien esta configurado, ya sabe a donde debe ir el xhr y sabe donde debe llegar
2 - los headers fueron enviados y recibidos, sabemso la respuesta
3 - nos dice si se esta descargando activamente informacion
4 - EL pedido fue finalizado, no necesariamente exitoso, por ejemplo el codigo 404
se realizo el pedido pero no se encontro el pedido, no fue exitoso pero si finalizo
*/

//GET - POST - PUT - PATCH - DELETE
//Pedidos externos: CORS - las transferencias de servidor a servidor son para cosas excepcionales.
//vamos a pedirle a nuestro servidor un archivo llamado texto.txt

//voy a cambiar el recurso por plantilla.html
//xhr.open("get","texto.txt");
xhr.open("get","plantilla.html");
console.log(xhr.readyState);

//Ya se creo y configuro
//no va a poder ser efectivo el envio.
//send siempre se escribe luego de haber configurado el objeto.

//envio
xhr.send();

//Tira error, porque no estamos en el protocolo http, estamos en el protocolo file.
//el cual nos permite revisar los recursos de la maquina
//DEBEREMOS INICIAR UN SERVICIO DE SERVIDOR WEB HTTP,
//para poder navegar nuestro HTML como si estuvieramos
//en una pagina web.

//la url de apache es la de localhost
//la ip es 127.0.0.1

//estamos simulando un servicio WEB

//xampp/htdocs va a ser lo que veamos cada vez que escribamos
//en el navegador localhost
//poner todo el contenido de la web ahi en htdocs dentro de xampp

//Tira error diciendo que falta texto.txt, el cual agregamos.

//Viendo el xhr vemos que el readyState paso a valor 4,
//es decir el pedido ya finalizado

//Y ademas vemos todo lo asociado al texto.txt que fue recibido por medio de get y su informacion.

//DESDE ON ABORT HASTA ON TIMEOUT son eventos de ajax.
//estos eventos se iran disparando a medida que se vayan realizando acciones

//RESPONSE
//response texto
//responsexml

//se completan con la respuesta del recurso que fuimos a pedir.
//response es mucho mas versatil, vamos a terminar trabajando con response.


//ResponseType sirve para decirle a ajax de que forma queremos que se interprete la RESPUESTA
//si queremos que nos devuelva algun tipo en particular.

//status es el numero de acceso http, siempre nos dira exactamente que respuesta nos dio el servidor.

//status text nos muestra el texto correspondiente a status

//timeout siempre viene en 0, es decir va a esperar al servidor lo maximo que se pueda.
//esta expresado en milisegundos, si ponemos un 1 directamente decimos que estamos esperando eso en la solicitud

//upload es otra forma de trabajar con ajax para subir archivos a un servidor.

//withcredentials permite manejar las cookies o headers de autorizacion o credenciales a traves de distinto
//dominio, es para trabajar con otros servidores.

console.log(xhr.response);

//Aparece en blanco, debido al principio de asincronia
//como la propiedad no se resolvio, ya que ajax no termino el proceso.

//Habria que demorar el programa lo suficiente para que ajax puede imprimir algo.
//necesitamos un acceso asincronico.

setTimeout(()=>{
  console.log(xhr.response);
},1000);

//Funciona, el problema es que si tardara mas de un segundo entonces no nos serviria mas.

//readystatechange se va ejecutando cada vez que la propiedad readystate cambie

xhr.addEventListener("readystatechange", ()=>{
  console.log("Estado actual: ", xhr.readyState);
  if(xhr.readyState == 4){
    console.log(xhr.readyState);
  }
});

//Si el readyState vale 4 entonces es porque ya tenemos listo todo y podemos llamar al objeto xhr una vez finalizado el proceso.

//El readyState nos indicaba que las cabeceras de envio y resṕmse ññegarpm al servidor y tambien a la maquina

//si readyState = 2 sabemos el tipo de archivo que nos va a estar llegando y la longitudo

//lo cual nos permite cancelar o continuar con el pedido.

if(xhr.readyState == 2){
  let headers = xhr.getAllResponseHeaders();
 //Trae todas las cabeceras.
 //trae todo en un solo string
  console.log(headers);

  //podemos consultar cabeceras individualmente

  let tipo = xhr.getAllResponseHeaders(content-type);
  console.log(tipo);

  if(tipo != "text/html"){
      //Se aborta la descarga de la informacion
      //es decir nunca traemos el recurso si no es del tipo que dije.

      xhr.abort();
  }
}

//Si se pasa de nuestro timepo permitido la solicitud se cancelar
xhr.timeout = 1;

xhr.addEventListener("timeout", ()=>{
  console.log("E pedido se ha excedido de tiempo");
});

//Mirando en network vemos que la solicitud fue cancelada
//ademas vemos que no hay respuesta.


//Evento load
//se fija si termino el estado, o sea si paso por el 4.
//va a ejecutar el callback especificamente cuando el readyState llegue al numero 4.
//no cuando ha finalizado con exito, sino cuando ha finalizado.

xhr.addEventListener("load", ()=>{
 //Si es 200 significa que es un codigo exitoso
  //if(xhr.status == 200){
  //  console.log(xhr.response);
  //}

  switch (xhr.status) {
    case 200:

      break;
    case 404:
      break
    default:

  }
});

let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
  let xhr = new XMLHttpRequest;

  xhr.open("get", "plantilla.html");

  xhr.addEventListener("load", ()=>{
    if(xhr.status == 200){
       let plantilla = xhr.response;
       let div = document.createElement("div");
       div.innerHTML = plantilla;
       console.log(plantilla);
    }
  })
});
