//Tenemos un nuevo tipo de ambito, el auxiliar.
//De esa manera podemos tener un mejor manejo de esa variable.

let a = 100;

//Si usaramos un var, el var va a quedar al final 
//con su valor luego del for.

//las let y const se pierden luego de ser utilizadas dentro
//de un for o un if.
//let no ensucia window.
//Tenemos una mejor manera de crear variables. y

for(let i = 0; i < 5; i++){
    console.log("hola", i)
}

if(true){
    let aux = 60;
    console.log(aux);
}

var dato = 1000;
var dato = 2000;

let datoLet = 1000;
const PI = 3.1416;

const nodo = document.body;
nodo.style.background = 