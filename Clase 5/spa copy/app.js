const btnHome = document.getElementById("btnhome");
const navegacion = document.getElementById("navegacion");
const contenedor = document.getElementById("contenedor");
//const botones = navegacion.querySelectorAll("button");
let fragNav = document.createDocumentFragment();
Object.keys(routes).forEach(ruta => {
    if (routes[ruta].boton == false) {
        return;
    }
    let boton = document.createElement("button");
    boton.setAttribute("data-ruta", ruta);
    boton.textContent = routes[ruta].boton;
    fragNav.appendChild(boton);
});
navegacion.appendChild(fragNav);

navegacion.addEventListener('click', navegar);
cargarContenedor(routes["/home"]);
window.addEventListener("popstate", e => cargarContenedor(e.state));

window.addEventListener('load', () => cargarContenedor(routes[window.location.pathname]));
//------------------------------------------------------
//Funciones
//------------------------------------------------------

function navegar(e) {

    if (e.target.id == "navegacion") {
        return false;
    }

    //<div></div> yo capturo el div, si le quiero agregar un atributo inventado que se llame nombre con algun valor si yo pongo data-nombre ="juan"
    //pongo data-apellido ="perez"
    //propiedad dataset: {} en general es un objeto vacío
    //paso a tener el dataset lleno asi
    //dataset: {nombre: "juan", apellido: "perez"}

    const botonPulsado = e.target;
    let propiedad = botonPulsado.dataset.ruta;
    const objetoPagina = routes[propiedad];

    //De los parametros el que nos interesa modificar primero es el ultimo
    //esta instruccion agrega navegacion
    //[] es la navegacion, que empieza vacía siempre.
    //si entramos al index ['index.html']
    //si entro a otra pagina dentro del sitio tendria
    //['index.html', 'pagina2.html]
    //el  /pepe no es una pagina real
    window.history.pushState(objetoPagina, objetoPagina.titulo, propiedad);
    //aca no se hace un request, luego no le estamos peticionando al servidor.
    cargarContenedor(objetoPagina);
}


function cargarContenedor(objetoPagina) {

    if (window.location.pathname == "/") {
        objetoPagina = routes["/home"];
    }

    if (!objetoPagina) {
        objetoPagina = routes.error404;
    }

    if (objetoPagina.cache) {
        contenedor.innerHTML = objetoPagina.cache;
        reinsertarScripts();
        document.title = objetoPagina.titulo;
        return
    }

    const ajax = new XMLHttpRequest();
    ajax.open('GET', objetoPagina.contenidoHTML);
    ajax.addEventListener('load', e2 => {
        if (ajax.status == 200 && ajax.readyState == 4) { //Saber si la respuesta es buena
            contenedor.innerHTML = ajax.response;
            objetoPagina.cache = ajax.response;
            reinsertarScripts();
            document.title = objetoPagina.titulo;
        } else {
            contenedor.innerHTML = "Error Custom";
        }
    });
    ajax.send();
}

//Permite utilizar las etiquetas script que estan dentro de las paginas traidas por medio de ajax
function reinsertarScripts() {
    const srcs = [];
    const scripts = contenedor.querySelectorAll("script");
    scripts.forEach(s => {
        srcs.push(s.src);
        s.remove();
    });

    let frag = document.createDocumentFragment();
    srcs.forEach(url => {
        let newScript = document.createElement("script");
        newScript.src = url;
        frag.appendChild(newScript);
    });
}