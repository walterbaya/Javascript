//var boton = document.querySelector("button");
/*
boton.onclick = console.log("click");

Se ejecuta la funcion log pero no tiene retorno entonces no se le agrega nada al on click y
además solo se imprime el click en la consola. 

las funciones que le pasamos a un evento no tienen que estar ejecutadas ​3 ​ sino
que tenemos que pasarle la referencia a esa función, es decir la definición entera de una
función

Creo la funcion en formato lambda del console log

mostrarClick = () => console.log("click");

boton.onclick = mostrarClick;

Se recupera el correcto funcionamiento inicial

boton.onclick = function() {
    console.log("no click!");
}

Si hago lo de arriba se muestra solo el no click!

No es recomendable usar las propiedades internas de un nodo directamente como por ejemplo modificar el 
onclick ya que el problema es que pueden ser sobreescritas.

//Digo que el listener es de tipo click, y la funcion que va a resolver que hacer frente a este evento sera
//la funcion mostrar click

mostrarClick = () => console.log("click");

boton.addEventListener("click", mostrarClick);

boton.addEventListener("click", () => console.log("Segunda impresion"));

//Ademas se puede observar que van bajando en la consola, es decir el contenido que dejaron queda!

//Cambio de fase de bubbling a capturing es decir arrancando de mas grande a mas chico

//Cuando ejecute el evento click va a iniciar primero el click del DOM
//y luego el click del boton, es decir al reves.

boton.addEventListener("click", () => console.log("click boton"), true);
document.addEventListener("click", () => console.log("click DOM"), true);

//Es decir desde el mas generico al mas particular, en general es al reves



//uso del event por default
boton.addEventListener("click", (e) => console.log(e));
//imprimir el evento es imprimir un objeto con todas las propiedades del mismo
//se podria eliminar la fase usando stoppropagation sobre el parametro e.
//imprimimos el nodo que nos mando a llamar el evento o sea el target.

//boton.addEventListener("click", (e) => console.log(e.target));

foo = e => {
    e.stopPropagation();
    console.log(e.target, e.currentTarget);
}
document.getElementById("uno").addEventListener("click", foo);
document.getElementById("dos").addEventListener("click", foo);
document.getElementById("tres").addEventListener("click", foo);

//Vemos como haciendo el stopPropagation cancelo la propagacion de los eventos, por ejemplo haciendo click en el verde notamos que 
//no ocurre que se vaya el evento al DOM.


//CREACION DE UN NUEVO EVENTO

var evt = new Event("look", { "bubbles": true, "cancelable": false });
document.dispatchEvent(evt);
document.getElementById("uno").dispatchEvent(evt);


boton = document.getElementById("crear");
boton.addEventListener("click", function() {
    var btn_dinamico = document.createElement("button");
    btn_dinamico.id = "dinamico";
    btn_dinamico.innerText = "dinamico!";
    btn_dinamico.addEventListener("click", () => console.log("click dinámico"));
    document.body.appendChild(btn_dinamico);
});

*/

boton = document.getElementById("crear");
boton.addEventListener("click", function() {
    var btn_dinamico = document.createElement("button");
    btn_dinamico.id = "dinamico";
    btn_dinamico.innerText = "dinamico!";
    document.body.appendChild(btn_dinamico);
});

document.addEventListener("click", (e) => {
    if (e.target.id = "dinamico") {
        console.log(e.target.innerText);
    }
});