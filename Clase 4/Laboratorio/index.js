let menu = document.querySelector(".material-icons")
let drawer = document.querySelector("#drawer")
menu.addEventListener("click",function(e){
if (drawer.style.left) {
drawer.style.left = ''
}else{
drawer.style.left = '0px'
}
})
//1)Asignarle un evento de load a la imagen del gif para que cuando haya terminado de cargar
//realicemos entonces un pedido por ajax para ir a buscar los contenidos del archivo home.html
//2)Al finalizar el pedido se deberá mostrar el contenido del resultado dentro del elemento <main>

//Creo el ajax para llevar control sobre la carga de la imagen
let xhr = new XMLHttpRequest();
xhr.open("get", "loader.gif");

//Le agrego un listener a la carga de la imagen

xhr.addEventListener("load", () => {
  //si la carga de la imagen fue exitosa entonces voy a buscar los contenidos del archivo home.
  if(xhr.status == 200){
    let xhr2 = new XMLHttpRequest();
    xhr2.open("get", "home.html");
    xhr2.send();
    xhr2.addEventListener("load", ()=>{
      //Obtengo el main del documento
      let main = document.querySelector("main");
      //Creo un
      //le pongo a h1 el html que contiene el xhr2
      console.log(main.innerHTML);
      main.innerHTML = main.innerHTML + xhr2.response;
    });
  }
  else{
    console.log("La imagen no se cargo correctamente.")
  }
});
xhr.send();

//3)Asignarle un evento de click a cada link del <nav> para que cada uno pueda
// pedir por ajax los contenidos de los archivos que les corresponden. Para esto recordar que :
    //3.1)Hay que cancelarles el evento default
    //3.2)El callback para pedir los archivos de cada link debe ser el mismo para los tres casos

    //Obtengo todos los elementos

    let nav = document.querySelector("nav");
    nav.addEventListener("click", (e)=>{
        //prevengo el default
        e.preventDefault();

        //obtengo el elemento pulsado
        link = e.target;

        if(link.tagName == "A"){
            //Creo un XMLHttpRequest para poder solicitar el archivo
            /*let ajax = new XMLHttpRequest();
            ajax.open("get", link.getAttribute("href"));

            ajax.addEventListener("load", () =>{
                if(ajax.status == 200){
                  let contenido = ajax.response;
                  let main = document.querySelector("main");
                  main.innerHTML = contenido;
                }
            });
            */
            ajax("get", link.getAttribute("href"));
        }
    });


//Bonus
//4)Refactorizar el programa tal que nos quede una funcion llamada ajax que tome como parametros
    //4.1)String Url : la url para usar en el pedido
    //4.2)String Metodo : el metodo HTTP del pedido

ajax = function(metodo, url){
  let xhr = new XMLHttpRequest();
  xhr.open(metodo, url);

  xhr.addEventListener("load", () =>{
      if(xhr.status == 200){
        let contenido = xhr.response;
        let main = document.querySelector("main");
        main.innerHTML = contenido;
      }
  });
  xhr.send();
}

//5)Refactorizar la funcion ajax creada en el punto anterior para que ademas tome como ultimo parametro una funcion Function callback? opcional que sera usada en el evento load pasandole la respuesta del objeto XHR por defecto
//6)Crear una funcion llamada render que tome como parametros :
    //6.1)String Selector : el selector a donde va a ser renderizada la informacion
    //6.2)String Data : La informacion para mostrar en el html
//La misma debe ser utilizada en nuestra funcion anterior como parametro para mostrar los resultados del ejercicion 3
