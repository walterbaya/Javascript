/*1)Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta 
 que solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de 
 modificaciones en el DOM.
*/


//Creo una lista desordenada, es const ya que no voy a redefinirla nunca.

const unorderedList = document.createElement("ul");

//Creo un fragmento, que basicamente permite tener varios nodos dentro, para luego si deseamos 
//insertarlos todos juntos en el documento, un fragmento es justamente eso un pedazo de documento.

    //no voy a redefinirlo nunca, por ello const.
    const nodes = document.createDocumentFragment();
    
    for (let i = 0; i < 10 ; i++) {
        //la const vive en cada iteracion y muere, por lo que se recrea en cada una 
        //y no va a tirar error.
        const iItem = document.createElement("li");
        iItem.innerText = "item: " + (i+1);
        nodes.appendChild(iItem);
    }
    //unorderdedList le asigno todo lo que habia en el fragmento como hijo.

    unorderedList.appendChild(nodes);

    console.log(unorderedList);

//2)Hacer que el <article> con id "movil" solamente se vea si la pagina se carga a menos de 500px.

//supongo que cuando dice la pagina, se refiere a toda la ventana, o sea al navegador, ya que podria ser
//que sea un anuncio que solo es para celular.

//defino una variable global tamaño que usare para ver si se debe quitar el article.

var tamaño = window.outerHeight >= 500 || window.outerWidth >= 500;

//lo normal es que en general no se va a poder ver en pantallas, ya que en mi caso
//lo minimo que puedo tener el navegador es 511 px

console.log(tamaño);

console.log(window.outerWidth);

console.log(window.outerHeight);

const articulo = document.getElementById("movil");
if(tamaño){
    const padre = articulo.parentNode;
    padre.removeChild(articulo);
}

/*3)Realizar la misma operacion que en el punto uno, pero ahora para el <ul> que ya se 
    encuentra en el <body>. Recordar que no se puede hacer multiples appendChild a un nodo.
*/

if(!tamaño){
    const liFragment = document.createDocumentFragment();
    const staticList = document.getElementById("estatico");
    
    for (let i = 0; i < 10 ; i++) {
        const iItem = document.createElement("li");
        iItem.innerText = "item: " + (i+1);
        liFragment.appendChild(iItem);
    } 
    staticList.appendChild(liFragment);
    
    console.log(staticList);
}


/*4)Intercambiar las URLs de los links de la barra de navegacion.
 El que dice Google! tiene que redirigir a educacionit.com y viceversa.
*/

//traigo todos los tipo a
//recordar como funciona el queryselector, el cual trae segun los selectores que haya en su interior.
let links = document.querySelectorAll("a");
let googleLink = links[0].href;
links[0].href = links[1].href;
links[1].href = googleLink;

//5)Cambiarle el color del fondo al <header> por alguna tonalidad de azul oscuro y al <h1> 
//por alguna tonalidad de blanco para que contraste.

const header = document.querySelector("header");
header.style.backgroundColor = "#252850";
const h1 = document.querySelector("h1");
h1.style.color = "white";

//Bonus:
//6)Realizar un efecto marquesina en un nodo <p> que diga "Mi primer programa en JS" 
//que muestre de a una letra a la vez cada medio segundo por letra

//Creamos el parrafo 

const parrafoTexto = "Mi primer programa en JS";
let parrafoNuevo =  document.createElement("p");

let main = document.querySelector("main");
main.appendChild(parrafoNuevo);

let parrafoAuxiliar = "";
let counter = 0;
setInterval(() => {
    if(parrafoTexto.length == counter){
        clearInterval();
    }
    else{
        parrafoAuxiliar = parrafoAuxiliar + parrafoTexto.charAt(counter);
        parrafoNuevo.innerText = parrafoAuxiliar;
        counter++;
    }
}, 200);
 
parrafoNuevo.style.textAlign = "center";
parrafoNuevo.style.fontSize = "20px";

//7)Crear un <div> de 200px de ancho por 200px de alto con el color de fondo a eleccion. 
//El elemento tiene que poder ir y venir a lo largo de todo el ancho de la pantalla de manera continua.


//Creacion del div 

let div = document.createElement("div");
div.style.height = "200px";
div.style.width = "200px";
div.style.backgroundColor = "grey";
main.appendChild(div);

let anchoRestante = window.innerWidth - 200;
let contadorActual = 0;

setInterval(() => {
    if(anchoRestante-10 != contadorActual){
        if((anchoRestante-10)/3 < contadorActual && (anchoRestante - (anchoRestante-10)/3) > contadorActual){
            div.style.borderRadius = "50%";
            div.style.marginLeft = contadorActual + "px";
            contadorActual++;    
        }
        else{
        div.style.borderRadius = "0%";
        div.style.marginLeft = contadorActual + "px";
        contadorActual++;
        }
    }
    else{
        clearInterval();
    }
}, 1);



//8)Al <div> del punto anterior transformarlo en circulo cada vez que se aproxime al centro de la pantalla 
//y que vuelva a cuadrado cuando se aproxime a los extremos. 

