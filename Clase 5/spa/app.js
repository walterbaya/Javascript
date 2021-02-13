const btnHome = document.getElementById("btnhome");
const navegacion = document.getElementById("navegacion");
const contenedor = document.getElementById("contenedor");
//const botones = navegacion.querySelectorAll("button");

navegacion.addEventListener('click', navegar);
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
    const ajax = new XMLHttpRequest();
    ajax.open('GET', botonPulsado.dataset.ruta);
    ajax.addEventListener('load', e2 => {
        if (ajax.status == 200 && ajax.readyState == 4) { //Saber si la respuesta es buena
            contenedor.innerHTML = ajax.response;
        } else {
            contenedor.innerHTML = "Error Custom";
        }
    });
    ajax.send();
}