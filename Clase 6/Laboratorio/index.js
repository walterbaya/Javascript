 let imagenes = []
            // 
     //     Vamos a intentar completar nuestra funcion ajax para darle mas independencia. Para esto vamos a trabajar el html del archivo download.html :

        //     1)Agregar 5 imagenes a nuestra carpeta de proyecto
        //Finalizado
        //     2)Actualizar el array imagenes con los nombres de tus imagenes

        for (let index = 1; index < 6; index++) {
            let nombre = "imagen" + index + ".jpg"
            imagenes.push(nombre);
        }

        //     3)Por cada una de las imagenes se debera mostrar un item dentro de la lista desordenada con un <a> que apunte a cada archivo. Realizar esta operacion adentro de una funcion llamada crearLinks(*En el archivo app.js , al finalizar la carga del archivo download.html se esta llamando a esta funcion como callback final)

        function crearLinks() {
            let fragmento = new DocumentFragment()
                //el callback recordar que trabaja con el response
            ajax("download.html", "get", res => {
                imagenes.forEach(img => {
                    let a = document.createElement("a")
                    a.href = img
                    a.id = img
                    a.className = "links"
                    a.style = "display: block"
                    a.innerText = img
                    fragmento.appendChild(a);
                })
                $('#archivos-descarga').append(fragmento)
                let aEs = $('#archivos-descarga a').get()
                    //asignarle evento click e ir a buscar la imagen
                aEs.forEach(a => {
                    console.log(a)
                    eventoPedirImagen(a)
                })
            }, false)
        }

        //4)Asignarles un evento de click para que puedan ir a pedir por ajax el archivo en cuestion
                  // a : item al que se le quiere asignar el listener de click para obtener la imagen
        function eventoPedirImagen(a) {
            a.addEventListener('click', obtenerImagen);
        }

        function obtenerImagen(e){
            e.preventDefault()
            url = e.target.innerText
            ajax(url,"get", response => {
                let urlObject = URL.createObjectURL(response)
                let img = document.createElement('img')
                let aceptar = document.createElement('button')
                let cancelar = document.createElement('button')
                img.className = 'imagenes'
                img.src = urlObject
                aceptar.className = 'botones'
                cancelar.className = 'botones'
                aceptar.innerText = "Aceptar"
                cancelar.innerText = "Cancelar"
                aceptar.type ="button"
                e.target.appendChild(img)
                e.target.appendChild(aceptar)
                e.target.appendChild(cancelar)

            },false, true, progress)

        }
        
        // 5)Admitir un nuevo parametro opcional dentro de nuestra funcion ajax. El mismo debera ser de tipo funcion y si estuviera presente, primero tiene que registrar un evento progress en nuestro objeto XHR
        //6)Dentro del evento progress validar si es posible calcular la cantidad de bytes descargados hasta el momento. En caso de serlo, mostrar una barra de progreso numerica para informarle al usuario como va su descarga.

        //Agrega una barra luego del elem
        function progress(xhr, url){
                let barraProgreso = document.createElement('progress')
                barraProgreso.max = 100
                barraProgreso.className = "cargadores"
                document.getElementById(url).appendChild(barraProgreso)
                xhr.addEventListener('progress', e => {
                if(e.lengthComputable){
                    barraProgreso.value = 100*(e.loaded/e.total)
                }
            })
        }


        //7)Integrar nuestra funcion ajax con el nuevo front end para que se pueda apreciar la descarga de cada archivo. Al finalizar, 
        


        //Falta realizar esta parte
        //descargar el archivo y mostrar un preview del mismo en miniatura para que se entere que esta bajando
        // junto con un boton para aceptar la descarga o cancelarla.

        //BONUS
        //      Vamos a intentar completar aun mas nuestra funcion de ajax para que la misma pueda manejar el control de la subida de informacion al servidor. Para eso vamos a trabajar sobre el archivo dropzone.html:
        

        //1)Mostrar un preview de los archivos una vez que estos se hayan seleccionado.
        // Se puede utilizar el evento change en el input o el evento drop de la API
        // si se vio en clase como usar los eventos de drag y drop. Cada preview debe contar con el nombre y el peso de los archivos
        function crearImagen(dropzone){
            let div = document.getElementById("dropzone")
            let input = document.getElementById("dropzone-input")
            
            div.addEventListener('drop', crearImg)
            div.addEventListener('dragover', e => {
                e.preventDefault()
            })
            input.addEventListener('change', crearImg)
        }

        function crearImg(e){
             let botonSubir = document.getElementById('subir-dropzone')
             e.preventDefault()
             let dropzone = document.getElementById("dropzone")
             console.log(dropzone)
             let vector
             if(e.type == 'change'){
                vector = Array.from(e.target.files)
                /*3)Registrarle un evento de click al boton #subir-dropzone
                 para el pueda interceptar el valor del input y mostrarnos los archivos en la consola
                */
                botonSubir.addEventListener('click', () => {
                
                /*
                    4)Refactorizar el evento del punto anterior
                    para que el mismo sea capaz de guardar 
                    nuestros archivos como parametros usables 
                    dentro de un pedido por ajax a traves del metodo 
                    POST.
                */
                   let data = new FormData()
                   vector.forEach(v => {
                        console.log(v)
                        data.append(v.name, v)
                        let xhr = new XMLHttpRequest()
                        xhr.open('post', 'url')
                        xhr.send(data)
                   })
                   
                } )
             }
             else{
                vector = Array.from(e.dataTransfer.files)
             }
             vector.forEach(elem => {
                    let objetoURL = URL.createObjectURL(elem)
                    let div = document.createElement("div")
                    div.innerHTML = `<div>
                                        <img></img>
                                        <p>${elem.name}</p>
                                        <p>${elem.size}</p>
                                    </div>`
                    let miniatura = div.querySelector("img")
                    miniatura.className = "imagenes"
                    miniatura.src = objetoURL
                    div.className ="miniaturas"
                    console.log(miniatura)
                    dropzone.appendChild(div)           
                })
        }


        

        //2)Remover la clase .none de los botones para que estos se puedan ver 
            function removerNone(){
                let botones = document.querySelectorAll('button')
                let botonCancelar = document.getElementById('cancelar-dropzone')
                botonCancelar.addEventListener('click', () => {
                    let dropzone = document.getElementById('dropzone')
                    dropzone.innerHTML = '<label id="dropzone-label" for="dropzone-input">Arrastre sus archivos o dele click aqui</label>'
                })
                botones.forEach(b => {
                    b.className = ""
                })
            }
             
        //     5)Registrarle un evento de click al boton #cancelar-dropzone para que se limpie el contenido
        // del dropzone y vuelva su texto a la normalidad.