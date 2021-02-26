//Representar los archivos como miniaturas tarjetitas de esas formas.
const inputFile = document.getElementById("dropzone-input");
const dropzone = document.getElementById("dropzone");
const sectionMiniaturas = dropzone.querySelector("section");
const botonSubir = document.getElementById("subir-imagenes");
//generamos un FormData, es una especie de array
const fd = new FormData();
fd.append("nombre", "Juan"); //permite pasarle clave, valor crea un formulario, sin la necesidad de tener un formulario.
                             //de otra manera, si tuvieramos un formulario podemos capturar una referencia al mismo

botonSubir.addEventListener('click', e => {
    //Va a ser un ajax de tipo post
    //construimos el ajax como siempre

    const xhr = new XMLHttpRequest();
    //usamos un post, ya que vamos a enviar información, necesitamos POSTEAR.
    xhr.open('post', './subir.php');  //enviar = post, pedir = get
    xhr.addEventListener('load', e => {
        console.log(xhr.response);
    });
    xhr.send(); //En el send deben estar las fotos que quiero enviar, dentro espera un form-data
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
    });
}


//mirar el proto, o prototype que es donde aparecen las propiedades de los elementos.

