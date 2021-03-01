//Representar los archivos como miniaturas tarjetitas de esas formas.
const inputFile = document.getElementById("dropzone-input");
const dropzone = document.getElementById("dropzone");
const sectionMiniaturas = dropzone.querySelector("section");
const botonSubir = document.getElementById("subir-imagenes");
const barra = document.getElementById("barra");
const fotos = [];
//generamos un FormData, es una especie de array
//es una estructura que tiene propiedades y valores dados por los names y value.
//los formularios arman este objeto automaticamente
//cuando los formularios hacen la peticion envian automaticamente un objeto de este tipo a la url
//realizando la peticion que aca hacemos manual pero automatica.

const fd = new FormData();
fd.append("nombre", "Juan"); //permite pasarle clave, valor crea un formulario, sin la necesidad de tener un formulario.
                             //de otra manera, si tuvieramos un formulario podemos capturar una referencia al mismo

botonSubir.addEventListener('click', e => {
    //Va a ser un ajax de tipo post
    //construimos el ajax como siempre

    const xhr = new XMLHttpRequest();
    //usamos un post, ya que vamos a enviar información, necesitamos POSTEAR.
    //el atributo direccion nos dice donde esta en el servidor
    /*si nosotros enviamos el formulario toda la informacion es reconocida por el formulario
    con una queryString  el formulario esta enviando el fd al servidor y el servidor lo recoje y maneja el backend
    en java en mi caso*/
    //es necesario segun mdn escribir el fotografias por el hecho de ser un array como fotografias[]
    fd.append('fotografias[]', fotos[0])
    fd.append('fotografias[]', fotos[1])
    //habria que hacerlo con un for, pero asi mandamos un array por ejemplo de dos fotografias.
    xhr.open('post', './subir.php');  //enviar = post, pedir = get
    xhr.upload.addEventListener('progress', e => {
        //ira imprimiento la cantidad total de bytes subidos de momento
        console.log(e);
        let porcentaje = (e.loaded * 100) / e.total;
        if(porcentaje >= 100){
            document.addEventListener.getElementById('respuesta').innerHTML = '<i class="fa fa-spinner fa-spin"> </i>'
        }
        //Es importante probar con slow 3g en la parte de network tomando en cuenta que los tiempos de carga existen.
    })
    xhr.addEventListener('load', () => {
        document.getElementById('respuesta') = xhr.response;
    });
    xhr.send(fd); //En el send deben estar las fotos que quiero enviar, dentro espera un form-data
});

document.addEventListener('dragover', e => {
    e.preventDefault();
});

//Cada vez que arrastramos algo nos aparece ese algo en pantalla, ahora la idea es hacer un preventDefault()
//El problema es que el comportamiento por defecto sigue ocurriendo, ya que la unica manera de detener el comportamiento
//por defecto del drop es deteniendo el comportamiento por defecto del dragover
//Luego de eso si ocurrirá lo que esperabamos, que no ocurra el comportamiento por defecto.

//Input es el unico que tiene e currentTarget
//el dataTransfer tiene varias propiedades, la propiedad files por un problema de refresco
// tenemos los archivos pero nos marca longitud 0 


document.addEventListener('drop', e => {
    e.preventDefault();
    if (dropzone.contains(e.target)) {
        console.log(e);
        //ese data transfer tiene la propiedad de files que es la misma que la de los inputs
        procesarArchivos(e.dataTransfer.files);
    } else {
        alert("Suelta el archivo dentro del dropzone");
    }
});

inputFile.addEventListener('change', e => {
    procesarArchivos(e.target.files);
});


//Buscar librerias hammer y interact.js son ambas relacionadas a esta tematica.

//los blob son la imagen en mapa de bits.
//cuando un formulario devuelve un archivo en realidad devuelve un blob.
//archivos no es un array, es un fileList, por lo cual este forEach falla, ya que es para arrays.
//Entonces el paso previo es transformar en un array el fileList.
//de manera que entonces el paso previo es convertir dicho fileList a un array utilizando la funcion Array.from

//HACER APARECER EN EL FORM DATA todos los archivos.
//creamos la miniatura, podría guardar este archivo en el formData
function procesarArchivos(archivos) {
    let arrArchivos = Array.from(archivos);
    arrArchivos.forEach(arch => {
        let card = document.createElement("div");
        card.className = "thumbnail";
        //Genera una URL falsa que no hace referencia al servidor, sino al mismo filesystem algo que esta en el cliente
        //esto URL es tambien una webApi
        let foto = URL.createObjectURL(arch);
        //Template string
        card.innerHTML = `<img src="${foto}" width="100px">
                          <p>${arch.name}</p>
                          <p>${(arch.size / 1024).toFixed(0)} kb</p>`;

        sectionMiniaturas.appendChild(card);
        fotos.push(arch);
    });
}


//mirar el proto, o prototype que es donde aparecen las propiedades de los elementos.

//Al realizar un request enviamos
/*protocolo /recursoquepido http/version
host: www.test.com
accept: text/html
user-agent: mozzilla/4.0
un monton de clave valor,
el host es el dominio

luego de esto que son los headers, tenemos el body con la informacion que queremos enviar.

userid = 10 & titulo = principal


RESPONSE

HTTP/1.1 200 OK
Date: Mon, 11 May 2020 ....
Headers

Body
<h1>Hola Mundo</h1>
*/

//En el send debemos enviar el objeto formData lleno con todo lo que necesitamos.
/*Si lo enviamos así tenemos un cors error, es debido a que todo lo que tiene que ver con el cliente servidor, peticiones
que hace el cliente  si yo le pido cosas desde mi servidor a otro que esta en otro lado esta prohibido.
El navegador se da cuenta que la peticion es a un servidor distinto al actual, con el solo hecho de ver que empieza con
http

Antes de ejecutar el send el navegador manda un preRequest, que lo que hace es preguntarle al servidor alguien va 
a venir a pedir algo y viene de tal dominio, vos servidor permitis que te haga un post?, el servidor response que si o que
no, si dice que no entonces muestra el cors error.

El servidor se fija de que servidor viene mirando la lista blanca, si estas en la negra no podes, si no estas en 
la blanca tampoco.

De eso se encarga la gente del servidor*/
