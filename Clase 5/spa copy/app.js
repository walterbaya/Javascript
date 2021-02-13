const btnHome = document.getElementById("btnhome");
const navegacion = document.getElementById("navegacion");
const contenedor = document.getElementById("contenedor");
//const botones = navegacion.querySelectorAll("button");

navegacion.addEventListener('click', navegar);
cargarContenedor(routes["/home"]);
window.addEventListener("popstate", e => cargarContenedor(e.state));

window.addEventListener('load', e => cargarContenedor(routes[window.location.pathname]));
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

    const ajax = new XMLHttpRequest();
    ajax.open('GET', objetoPagina.contenidoHTML);
    ajax.addEventListener('load', e2 => {
        if (ajax.status == 200 && ajax.readyState == 4) { //Saber si la respuesta es buena
            contenedor.innerHTML = ajax.response;
            document.title = objetoPagina.titulo;
        } else {
            contenedor.innerHTML = "Error Custom";
        }
    });
    ajax.send();
}