//Captura 

var objDiv = document.getElementById("caja");
console.dir(objDiv);
//el dir muestra el verdadero contenido.
//El get element by id, obtiene 
//un objeto, es el mas rapido que existe.
//devuelve un objeto del html, por ejemplo el div que se llama caja.

//la captura es agarrar un objeto ya existente en memoria y luego guardarlo en una variable
//este proceso se conoce como captura

//si tenemos un atributo que se llama style
//en el objeto tendremos una propiedad llamada style

objDiv.style.color = "red";
objDiv.style.backgroundColor = "cyan";

//Recordar que el html trabaja con texto, por lo tanto son cadenas
//los valores que toman los atributos 

//si vemos en donde esta la consola, los elements, la representacion va cambiando,
//segun lo que le vaya poniendo desde aca en javascript.

//la mejor manera de modificar estilos lo mejor es utilizar clases.

//el atributo class en javascript es la propiedad class name

//objDiv.className = "contenedor redondeado"; 

//le pone al div la clase contenedor y la clase redondeado
//la posibilidad de modificar algo con class list es mejor que className 
//class list permite agregar las clases de a una sin importar donde este
objDiv.classList.add("redondeado");
objDiv.classList.add("cuadrado");
objDiv.classList.remove("cuadrado");
//contains es para ver si tiene algo.
var res = objDiv.classList.contains("cuadrado");
console.log(res);

//las clases deben estar definidas en css.

//podemos ademas modificar el contenido

//capturo el h1 el contenido del mismo
//en vez de pasar un id le pasamos un selector de css 
var objH1 = document.querySelector("h1");

//todo lo que sepamos de selectores en css hay que aplicarlo en javascript de la misma manera
//objH1.innerHTML = "Desde Javascript!";

//permite poder cambiar su contenido el innerHTML
//permite meter codigo html en esas etiquetas

//objH1.innerHTML("<i>javascript</i>");

//objH1.innerText("<i>javascript</i>"); //solo sirve para texto, no admite etiquetas

objH1.textContent = "javascript";

//si solo queremos agregar texto, entonces la propiedad oficial es el text content

//innerText no es oficial, asi que lo mejor es trabajar con textContent.
//NO USAR INNERTEXT. USAR TEXTCONTENT.
 

//LA PROXIMA CLASE SERA DE EVENTOS :)

//accion 
objH1.onclick = function(){
    alert("hola");
}

//cuando le hagamos click nos aparece el alert.

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(item + index);
}

console.log(window.location.href);