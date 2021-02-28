//Seleccion de elementos globales
let menu = document.querySelector(".material-icons")
let drawer = document.querySelector("#drawer")
let links = document.querySelectorAll("a")
let loader = document.querySelector("img")

/*
* EVENTOS
**/

//Carga del Home
if (loader.complete) {
    ajax("home.html","get",function(data){
        render("main",data)
    },true)
}else{
    loader.addEventListener("load",function(e){
        ajax("home.html","get",function(data){
            render("main",data)
        },true)
    })
}

//Pedidos de ajax
links.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        drawer.style.left = ''
        ajax(e.target.innerText+".html","get",function(data){
            render("main",data)
            portfolioLoad()
        },true)
    })
})




//Animacion del drawer
menu.addEventListener("click",function(e){
    if (drawer.style.left) {
        drawer.style.left = ''
    }else{
        drawer.style.left = '0px'
    }
})
//Precarga de contenido en historial
window.addEventListener("popstate",function(e){
    console.log(e.state)
    render("main",e.state.template)
})

//Animaciones de los input y textarea labels
document.body.addEventListener("focusin",function(e){
    if(e.target.tagName.toLowerCase() == "input" || e.target.tagName.toLowerCase() == "textarea"){
        e.target.parentNode.children[0].classList.add("subir")
        e.target.parentNode.classList.add("animacionBorde")
    }
})
document.body.addEventListener("focusout",function(e){
    if(e.target.tagName.toLowerCase() == "input" || e.target.tagName.toLowerCase() == "textarea"){
        if(e.target.value.length <= 0){
            e.target.parentNode.children[0].classList.remove("subir")
        }
        e.target.parentNode.classList.remove("animacionBorde")
    }
})


//Eventos dinamicos
document.addEventListener("click",function(e){
    let elemento;
    if(e.target.tagName.toLowerCase() == "button"){
        elemento = e.target
    }else{
        if(e.target.tagName.toLowerCase() == "article"){
            elemento = e.target
        }
        if(e.target.tagName.toLowerCase() == "footer" || e.target.tagName.toLowerCase() == "img"){
            if(e.target.parentNode.parentNode.tagName.toLowerCase() == "article"){
                elemento = e.target.parentNode.parentNode
            }
        }
    }
    if(elemento){
        switch(elemento.id){
            case "listado":
                ajax("listado.html","get",function(data){
                    render("main",data)
                },true)
            break;
            case "traduccion":
                ajax("traduccion.html","get",function(data){
                    render("main",data)
                },true)
            break;
            case "usuarios":
                ajax("http://jsonplaceholder.typicode.com/users","get",function(data){
                    let usuarios = JSON.parse(data)
                    let fragmento = document.createDocumentFragment()
                    usuarios.forEach(function(usuario){
                        let li = document.createElement("li")
                        li.innerText = usuario.name
                        fragmento.appendChild(li)
                    })
                    document.querySelector("#listado-usuarios").appendChild(fragmento)
                },false)
            break;
            case "dropzone-article":
                ajax("dropzone.html","get",function(data){
                    render("main",data)
                    removerNone()
                    crearImagen()
                },true)
            break;
            case "download-article":
                ajax("download.html","get",function(data){
                    render("main",data)
                    crearLinks()
                },true)
            break;
        }
    }
})

