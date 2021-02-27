let xhr = new XMLHttpRequest();
//las imagenes vienen serializadas o codificadas.
let progress = document.querySelector("progress")
let p = document.querySelector("p")
xhr.open("get", "iamgen.jpg")
xhr.send()

//Api web Blob-File sirven para traducir los archivos
//Ajax sirve para traducir streaming de audio y video tambien
//para esto ultimo se utiliza la API Web de MediaStream

let form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    //cuando tenemos archivos lo que pedimos es files no value
    //let valor = form[0].value
    let valor = form[0].files
    console.log(valor)
})

//si uno pone el value al ingresar a una foto, nos da una ruta false que simula la ruta del archivo

//Los xhr no sirven para consumir recursos de tipo imagenes sonido, etc


let xhr = new new XMLHttpRequest();
//nos sirve para decir que tipo tiene la respuesta y como debe mostrarse
xhr.responseType = "blob"
    //ya que file no viene incluida

//Los blobs son inutilizable, para leer la imagen, vamos a usar
//la api de URL
xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            let imagen_blob = xhr.response;
            let url = URL.createObjectURL(imagen_blob)
            console.log(url)
                //la url es total tiene todos los datos, es local
                //vamos ahora a construir la imagen
            let img = document.createElement("img");
            img.src = url
            document.body.appendChild(img)
        }
    })
    //las imagenes vienen serializadas o codificadas.


//Que pasa si la imagen es muy pesada, o es un video de 2gb como una pelicula o algo asi.
//lo que va a ocurrir es que vamos a usar progress para avisar que la imagen se eta cargando, o sea esata en estado 3
//progress tiene propiedad total loaded y length computable
xhr.addEventListener("progress", e => {
    console.log(e)
        //length computable nos dice si viene el content length en la cabecera
    if (e.lengthComputable) {
        let porcentaje = (e.loaded * 100) / e.total;
        p.innerText = `Se ha descargado el ${porcentaje} del archivo`
            //nos permite saber el porcentaje cargado del total.
    }
})

xhr.open("get", "iamgen.jpg")
xhr.send()

//DRAG y DROP 

//eventos dragente- dragleave-dragover-drop

let drop = document.getElementById("drop")
let input = document.getElementById("texto")

input.addEventListener("change", () => {
    console.log(input.files)
})
drop.addEventListener("dragenter", (e) => {
    e.preventDefault()
    console.log("Estoy adentro del drop")
})

drop.addEventListener("dragleave", (e) => {
    e.preventDefault()
    console.log("Estoy afuera del drop")
})

drop.addEventListener("dragover", (e) => {
    e.preventDefault()
    console.log("Estoy encima del drop")
})
drop.addEventListener("drop", (e) => {
    e.preventDefault()
    console.log(e.dataTransfer.files)
})

function manejarArchivos(archivos) {

    let data = new FormData()
    for (var i = 0; i < archivos.length; i++) {
        data.append(`imagen-${i}`, archivos[i])
    }
    let xhr = new new XMLHttpRequest();

    //Permite post enviar mas kb que get, razon por la cual
    //usamos post para enviar
    xhr.open("POST", "url")
        //los parametros por post en ajax se envian por send()
        //primero hay que serializarlo de manera que ajax sea capaz de entender
    xhr.send(data)
        //podemos usar FormData para esto

}

//Un formulario que le permita seleccioanr archivos de manera estandar
//tener ademas el drag y drop, usando label.