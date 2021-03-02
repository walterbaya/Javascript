//Funciones Utilitarias
/*
 *@param url       String   : La url donde hacemos el pedido
 *@param metodo    String   : El metodo HTTP del pedido
 *@param callback  Function : La funcion a ejecutar en el evento load 
 */
function ajax(url, metodo, callback, historial, blob) {
    let xhr = new XMLHttpRequest
    if (blob) {
        //aviso que 
        xhr.responseType = "blob"
        let blob = xhr.response
        let img  =   URL.createObjectURL(blob)
    
        xhr.open(metodo, url)
    }
    else{


    }
    xhr.open(metodo, url)
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            if (historial) {
                window.history.pushState({
                    url: url.split(".")[0],
                    template: xhr.response
                }, "", url.split(".")[0])
            }
            callback(xhr.response)
        }
    })
    xhr.send()
}
/*
 *@param selector    String : El selector donde se le hara render a la informacion
 *@param data        String : La informacion para mostrar
 */
function render(selector, data) {
    document.querySelector(selector).innerHTML = data
}
/*
 * Es la funcion que se encarga de determinar si la pagina que se acaba de cargar es la de portfolio
 */
function portfolioLoad() {
    let articulos = document.querySelectorAll("article")
    if (articulos.length) {
        articulos.forEach(function(articulo) {
            ajax("https://dog.ceo/api/breeds/image/random", "get", function(data) {
                let data_parseada = JSON.parse(data)
                let url = data_parseada.message
                let img = document.createElement("img")
                img.src = url
                articulo.children[0].appendChild(img)
            }, false)
        })
    }
}