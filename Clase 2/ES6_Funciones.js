//ES5

var sumar = function (a,b){ //forma de expresion
    console.log("sumando...");
    return a + b;
}

//ES6
//se cambia el function por el =>
//expresion lambda

sumarjs6 = (a,b) =>{
    console.log("sumando...");
    return a + b;
}

//ES5 

var duplicar = function(m){
    return m*2;
}

//ES6

//si hay una unica linea podemos omitir las llaves
//y tambien con ello la palabra return se omite tambien.
//se pueden tambien quitar los parentesis.

var duplicarjs6 = m => m*2;
let res = duplicarjs6(3);

//ES5

var mostrar = function(valor){
    console.log(valor);
}

//si no hay un retorno implicitamente existe el retorno
//del valor undefined, es decir hay un retorno implicito.
//luego  en ES6

const mostrar = valor => console.log(valor);

//usar las funciones flechas siempre que sea posible
//practicarlo todo lo que sea posible.