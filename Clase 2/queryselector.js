//si algo tiene id listo usar el id es lo mas rapido y eficiente.
const divCaja = document.getElementById("house");
console.dir(divCaja)
//obtenemos un objeto de tipo HTMLElement
//si no existe el objeto devuelve null.
//o sea sigue devolviendo un objeto  siempre.

//Javascript moderno

//Query selector
const nodoSection = document.querySelector("section");
//devuelve el primer section que encuentra en realidad el primero 
//segun como aparezca en el html.

//Query selector all

const parrafos = document.querySelectorAll("p");

//obtenemos como resultado una especie de array con todos los resultados de selector css.
//si no hay resultados devuelve array vacio.

const parrafos = document.querySelectorAll("#caja>p");

//Devuelve los de caja directamente solamente los que son hijos directos.

//de esta manera estamos en el seccion que esta dentro de la  caja
//esto funciona para cualquier html element que tengamos.

const sectionCaja = divCaja.querySelector("section");