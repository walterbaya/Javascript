        //Seleccion de elementos globales
        let menu = document.querySelector(".material-icons")
        let drawer = document.querySelector("#drawer")
        let links = document.querySelectorAll("a")
        let loader = document.querySelector("img");

        if (loader.complete) {
            ajax("http://127.0.0.1:5500/home.html", "get", function(data) {
                render("main", data);
            }, true);
        } else {
            loader.addEventListener("load", function(e) {})
        }

        //Animacion del drawer
        menu.addEventListener("click", function(e) {
            if (drawer.style.left) {
                drawer.style.left = ''
            } else {
                drawer.style.left = '0px'
            }
        })

        /*
         *@param selector    String : El selector donde se le hara render a la informacion
         *@param data        String : La informacion para mostrar
         */
        function render(selector, data) {
            let elemento = document.querySelector(selector);
            elemento.innerHTML = data;
        }

        //Continuando con la pagina dinamica que habiamos construido en la clase anterior vamos a intentar controlar el historial del cliente para poder simular una navegacion completa
        //1) Modificar el callback de los clicks de cada link para que ademas se cree un nuevo punto en el historial del usuario usando el texto de cada link como nueva url

        //Pedidos de ajax
        /*links.forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                drawer.style.left = ''
                    //data representa el xhr response
                ajax(e.target.href, "get", data => {
                    render("main", data, true);
                });
            });
        });
        */
        //Funciones Utilitarias
        /*
         *@param url       String   : La url donde hacemos el pedido
         *@param metodo    String   : El metodo HTTP del pedido
         *@param callback  Function : La funcion a ejecutar en el evento load 
         */


        //2)Asignarle a window un evento de popstate para que dentro de su callback podamos volver a solicitar el contenido de la url reflejada. Podemos usar el string ubicado en window.location.pathname que nos da nuestra URL generada en el paso anterior

        //cuando modifiquemos el historial queremos que nos lleve a la pagina, no solo que se cambie el nombre en el buscador.
        /*
        window.addEventListener("popstate", () => {
            //obtengo la url del recurso que debo traer
            const url = window.location.pathname.split("/")[1] + ".html";
            //insertar el contenido en el main
            //ir a buscar el recurso usando ajax
            ajax(url, "get", data => {
                //renderizarlo
                render("main", data);
            });
        });
        */
        //3)Cada vez que se modifique el historial, se debe guardar en su estado la respuesta del pedido dentro de un objeto bajo una propiedad llamada template y la url que le corresponda bajo una propiedad llamada url. 
        //Podemos bajar el pushState al evento load para tener acceso a la respuesta de la solicitud 
        //(*Podemos tener comportamiento erratico). La funcion ajax va a recibir entonces un cuarto parametro booleano para saber si tiene que modificar el historial o no. 

        links.forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                drawer.style.left = ''
                ajax(e.target.href, "get", data => {
                    render("main", data);
                }, true);
            });
        });

        //4)En caso que nos quede un comportamiento erratico dado que estamos ejecutando una funcion usando la url antes de que cambieque
        // si observamos el objeto state del historial tampoco corresponde al estado anterior correcto podemos dejar de ejecutar ajax y simplemente hacer render del contenido de nuestro template guardado en el historial

        window.addEventListener("popstate", () => {
            if (history.state != null) {
                render("main", history.state.template);
            }
        });

        //5)Refactorizar la funcion callback de ajax para que ademas pueda ejecutar una funcion llamada portfolioLoad.
        // La misma debera ser capaz de reconocer si portfolio es la pagina que se cargo
        // si lo fue, hara un pedido por ajax a la API de imagenes https://dog.ceo/api/breeds/image/random la cual nos devolvera un JSON con la url de una imagen de perros! Estas imagenes vamos a usarlas como elementos nuevos dentro de cada <article> que se encuentre en la seccion de portfolio

        //Bonus
        //6)Asignarles un evento de click a cada item dentro de la seccion portfolio para que puedan cargar su propio contenido por AJAX. La seccion de "Listado de usuarios" debe pedir un archivo llamado listado.html y la seccion "Traduccion de palabras" debe cargar un archivo llamado traduccion.html

        function ajax(url, metodo, callback, modificarHistorial) {
            let xhr = new XMLHttpRequest;
            xhr.open(metodo, url);
            xhr.addEventListener("load", function() {
                if (xhr.status == 200) {
                    callback(xhr.response);
                    if (modificarHistorial) {
                        var respuesta = {
                            template: xhr.response,
                            url: url.split("/")[3]
                        }
                        console.log(respuesta.url);
                        window.history.pushState(respuesta, " ", respuesta.url.split(".")[0]);
                    }
                    if (window.history.state.url.includes("portfolio")) {
                        let articles = document.querySelectorAll("article");
                        //Cargar contenido
                        portfolioLoad(articles);
                        articles.forEach(link => cargarContenido(link));
                    }
                }
            });
            xhr.send();
        }

        function portfolioLoad(articles) {

            let xhr = new XMLHttpRequest();
            xhr.open("get", "https://dog.ceo/api/breeds/image/random");
            xhr.addEventListener("load", function() {
                if (xhr.status == 200) {
                    let jsonObject = JSON.parse(xhr.response);
                    let imageURL = jsonObject.message;
                    articles.forEach(article => {
                        let img = document.createElement("img");
                        img.src = imageURL;
                        article.children[0].appendChild(img);
                    });
                }
            });
            xhr.send();
        }

        function cargarContenido(link) {
            link.addEventListener("click", e => {
                let url = "http://127.0.0.1:5500/" + link.id + ".html";
                ajax(url, "get", data => {
                    console.log(e.target.id);
                    switch (link.id) {
                        case "traduccion":
                            let traduccion = document.getElementById("traduccion");
                            traduccion.innerHTML = data;
                            break;
                        case "listado":
                            if (e.target.id == "usuarios") {
                                let xhr = new XMLHttpRequest();
                                xhr.open("get", "https://jsonplaceholder.typicode.com/users");
                                xhr.addEventListener("load", () => {
                                    if (xhr.status == 200) {
                                        let json = JSON.parse(xhr.response);
                                        let ul = document.querySelector("ul");
                                        var fragment = new DocumentFragment();
                                        json.forEach(j => {
                                            let li = document.createElement("li");
                                            li.innerHTML = j.name;
                                            fragment.appendChild(li);
                                        });
                                        console.log(ul.innerHTML);
                                        console.log(ul.innerHTML.length);
                                        if (ul.innerHTML.length == 0) {
                                            ul.appendChild(fragment);
                                        }
                                    }
                                });
                                xhr.send();
                                break;
                            } else {
                                let listado = document.getElementById("listado");
                                listado.innerHTML = data;
                            }
                    }
                }, true);
            });
        }

        //7)Refactorizar el callback del punto anterior para que tambien se le pueda asignar un click dinamico al <button> del template de listado.html . El callback de su click debera ir a pedir por GET la siguiente URL : https://jsonplaceholder.typicode.com/users y mostrar un <li> con el nombre de cada usuario dentro del <ul> del mismo template.