        //Seleccion de elementos globales
        let menu = document.querySelector(".material-icons")
        let drawer = document.querySelector("#drawer")
        let links = document.querySelectorAll("a")
        let loader = document.querySelector("img")

        if (loader.complete) {
            ajax("home.html", "get", function(data) {
                render("main", data)
            }, true)
        } else {
            loader.addEventListener("load", function(e) {
                console.log("Loaded!")
            })
        }

        //Animacion del drawer
        menu.addEventListener("click", function(e) {
            if (drawer.style.left) {
                drawer.style.left = ''
            } else {
                drawer.style.left = '0px'
            }
        })

        function ajax(url, metodo, callback) {
            let xhr = new XMLHttpRequest
            xhr.open(metodo, url)
            xhr.addEventListener("load", function() {
                if (xhr.status == 200) {
                    callback(xhr.response);
                    var respuesta = {
                        template: xhr.response,
                        url: url.split("/")[3]
                    }
                    history.pushState(respuesta, " ", respuesta.url.split(".")[0]);
                }
            })
            xhr.send()
        }
        /*
         *@param selector    String : El selector donde se le hara render a la informacion
         *@param data        String : La informacion para mostrar
         */
        function render(selector, data) {
            document.querySelector(selector).innerHTML = data;
        }

        //Continuando con la pagina dinamica que habiamos construido en la clase anterior vamos a intentar controlar el historial del cliente para poder simular una navegacion completa
        //1) Modificar el callback de los clicks de cada link para que ademas se cree un nuevo punto en el historial del usuario usando el texto de cada link como nueva url

        //Pedidos de ajax
        links.forEach(function(link) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                drawer.style.left = ''
                    //data representa el xhr response
                ajax(e.target.href, "get", data => {
                    render("main", data);
                });
            });
        });
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

        window.addEventListener("popstate", () => {
            render("get", history.state.template);
        });

        //4)En caso que nos quede un comportamiento erratico dado que estamos ejecutando una funcion usando la url antes de que cambie y que de hecho si observamos el objeto state del historial tampoco corresponde al estado anterior correcto podemos dejar de ejecutar ajax y simplemente hacer render del contenido de nuestro template guardado en el historial

        //5)Refactorizar la funcion callback de ajax para que ademas pueda ejecutar una funcion llamada portfolioLoad. La misma debera ser capaz de reconocer si portfolio es la pagina que se cargo y si lo fue, hara un pedido por ajax a la API de imagenes https://dog.ceo/api/breeds/image/random la cual nos devolvera un JSON con la url de una imagen de perros! Estas imagenes vamos a usarlas como elementos nuevos dentro de cada <article> que se encuentre en la seccion de portfolio

        //Bonus
        //6)Asignarles un evento de click a cada item dentro de la seccion portfolio para que puedan cargar su propio contenido por AJAX. La seccion de "Listado de usuarios" debe pedir un archivo llamado listado.html y la seccion "Traduccion de palabras" debe cargar un archivo llamado traduccion.html
        //7)Refactorizar el callback del punto anterior para que tambien se le pueda asignar un click dinamico al <button> del template de listado.html . El callback de su click debera ir a pedir por GET la siguiente URL : https://jsonplaceholder.typicode.com/users y mostrar un <li> con el nombre de cada usuario dentro del <ul> del mismo template.