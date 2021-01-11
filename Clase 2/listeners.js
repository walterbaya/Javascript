//capturamos el div con id #caja
const divCaja = document.getElementById("caja");

const boton = divCaja.querySelector("button");

const contenedor = divCaja.querySelector("div");

/**Cuando pulse el boton quiero que me agregue una etiqueta a
 * 
  */

/*
boton.onclick = accion;
  

function accion(){
        alert("hi");
}
*/

/**Lo mejor es usar el addEventListener 
 * es un contrato en el cual en la primer parametro
 * le pasamos el nombre del evento en este caso click
 * y la funcion que se ejecutara cuando al estar escuchando
 * llegue un evento.

boton.addEventListener("click", function(){
    alert("hi");
});

/**nombreEvento espera un string
 * callback espera una function.
 * Un callback es un parametro de una funcion que espera como 
 * valor una funcion. 
 * function addEventListener(nombreEvento, ){
 * callback}
 * 
 * el addEventListener tiene dentro el llamado a la funcion.
 * 
 *  */

function accionAgregar(){
     //contenedor.innerHTML = '<a href="#">Wikipedia</a>'
    //meterlo asi destruye todo el contenido que habia al inicio y lo remplaza por lo nuevo.
    //Construccion de elementos al vuelo en memoria.
    const enlace = document.createElement("a"); 
    //Creo un elemento HTML de tipo a. y esto devuelve un <a></a>
    //esto no es lo que yo quiero exactamente, le falta el contenido entre otras cosas.
    //este objeto nodo es valido.

    //le pongo un texto interno
    enlace.textContent = "Wikipedia";
    
    //le pongo un estilo

    enlace.style = "color: red;";

    //le agrego un href

    enlace.href = "#";


    //Ahora hay que conectar el objeto al arbol DOM
    //necesito una referencia al padre.
    contenedor.appendChild(enlace);

    //A partir de ahora esta en el DOM
    enlace.classList.add("prueba");
}



function accion2(){
    alert("HOLA")
}

 
boton.addEventListener("click", accionAgregar);
boton.addEventListener("click", accion2);

//puedo borrar el evento o los que yo quiera haciendo el removeEventListener

boton.removeEventListener("click",accion2);

//los listeners gastan memoria asi que el remove es mejor aprender a usarlo bastante
//La unica manera de hace un remove es si yo lo agregue con una ariable


//Quiero poner ahora un link a la wikipedia
//con la funcion agregar