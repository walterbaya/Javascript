//Funciones Utilitarias
/*
*@param url       String   : La url donde hacemos el pedido
*@param metodo    String   : El metodo HTTP del pedido
*@param callback  Function : La funcion a ejecutar en el evento load 
*/
function ajax(url,metodo,callback,historial,progressCallback,tipo,data){
    let xhr = new XMLHttpRequest
    xhr.open(metodo,url)
    if(tipo){
        xhr.responseType = tipo
    }
    if(progressCallback){
        xhr.addEventListener("progress",function(e){
            if(e.lengthComputable){
                let porcentaje = e.loaded * 100 / e.total
                progressCallback(porcentaje)
            }
        })
    }
    xhr.addEventListener("load",function(){
        if(xhr.status==200){
            if(historial){
                window.history.pushState({
                    url : url.split(".")[0],
                    template : xhr.response
                },"",url.split(".")[0])
            }
            callback(xhr.response)
        }
    })
    if(data && metodo.toLowerCase() == "post"){
        xhr.send(data)
    }else{
        xhr.send()
    }
}
/*
*@param selector    String : El selector donde se le hara render a la informacion
*@param data        String : La informacion para mostrar
*/
function render(selector,data){
    document.querySelector(selector).innerHTML = data
}
/*
* Es la funcion que se encarga de determinar si la pagina que se acaba de cargar es la de portfolio
*/
function portfolioLoad(){
    let articulos = document.querySelectorAll("article")
    if(articulos.length){
        articulos.forEach(function(articulo){
            ajax("https://dog.ceo/api/breeds/image/random","get",function(data){
                let data_parseada = JSON.parse(data)
                let url = data_parseada.message
                let img = document.createElement("img")
                img.src = url
                articulo.children[0].appendChild(img)
            },false)
        })
    }
}

function crearLinks(){
    let fragmento = document.createDocumentFragment()
    imagenes.forEach(function(imagen){
        let link = document.createElement("a")
        link.href = imagen+".jpeg"
        link.style.display = "block"
        link.innerText = imagen
        link.addEventListener("click",function(e){
            e.preventDefault();
            let p = document.createElement("progress")
            p.max = 100
            document.querySelector("main").appendChild(p)
            ajax(imagen+".jpeg","get",function(data){
                let url = URL.createObjectURL(data)
                let img = document.createElement("img")
                img.style.width = "200px"
                img.src = url
                let btn = document.createElement("button")
                btn.innerText = "Aceptar"
                btn.addEventListener("click",function(){
                    console.log("Se acepto la descarga")
                    let a = document.createElement("a")
                    a.download = "Imagen"
                    a.href = url
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                })
                document.querySelector("main").appendChild(img)
                document.querySelector("main").appendChild(btn)
                p.parentElement.removeChild(p)
            },false,function(progreso){
                p.value = progreso
            },"blob")
        })
        fragmento.appendChild(link)
    })
    document.querySelector("#archivos-descarga").appendChild(fragmento)
}

function manejarArchivos(archivos){
    archivos_globales = Array.prototype.slice.call(archivos,0)
    let fragmento = document.createDocumentFragment()
    for (var i = 0; i < archivos.length; i++) {
        let archivo = archivos[i]
        let img = document.createElement("img")
        img.src = archivo.name
        let pName = document.createElement("p")
        pName.innerText = archivo.name
        let pSize = document.createElement("p")
        pSize.innerText = ((archivo.size / 1024) / 1024) + "Mb"
        let div = document.createElement("div")
        div.id = "archivo"+i
        div.className = "thumbnail"
        div.appendChild(img)
        div.appendChild(pName)
        div.appendChild(pSize)
        fragmento.appendChild(div)
    }
    let dropzone = document.querySelector("#dropzone")
    template = dropzone.innerHTML
    dropzone.innerHTML = ""
    dropzone.appendChild(fragmento)
}