let imagenes = ["imagen1","imagen2","imagen3","imagen4","imagen5"]
  
//1) Refactorizar el pedido del ejemplo anterior utilizando promesas que contengan pedidos XHR. 
//Ambas funciones deben permanecer con esos nombres para que el programa siga funcionando.
//Decidí hardcodear el users/1 ya que no estaba funcionando tirando error constantemente porque estaba undefined
//siempre se iba por el catch la promesa


function resolver(direccion,funcionAceptar,funcionRechazar){
  const objetoConfigurable = {
    url : direccion,
    type : "GET",
    dataType : "json",
    success : funcionAceptar,
    error : funcionRechazar
  }
  $.ajax(objetoConfigurable)
}

const handleChange = new Promise(function(aceptar,rechazar){
  resolver("https://jsonplaceholder.typicode.com/users/1",
        (response)=>{
              //let user = JSON.parse(xhr_user.response)
              aceptar(response)
              console.log("Esta es la respuesta")
              console.log(response)
            }, 
        ()=>{
              let text = "fallo el pedido de usuario"
              rechazar(text)
            } 
      )
  })


handleChange
  .then(user => {
    return new Promise(function(aceptar,rechazar){
    resolver("https://jsonplaceholder.typicode.com/posts?userId=" + user.id,
        (posts)=>{
          aceptar(posts)
          console.log("Estos son los posts")
          console.log(posts)
        }, 
        ()=>{
              let text = "fallo la promesa de pedido de posts"
              rechazar(text)
        } 
      )
    })
  })
  .then(comentarios => {
    return new Promise(function(aceptar,rechazar){
    resolver("https://jsonplaceholder.typicode.com/comments?postId="+post.id,
        (comentarios)=>{
          aceptar(comentarios);
          console.log("comentarios correspondientes al" + post.id)
          console.log(comentarios)
        }, 
        ()=>{
            const text = "fallo la búsqueda de comentarios"
            rechazar(text)
        } 
      )
    })
  })
  .catch(valor => {
    console.log(valor)
  })


/*Se le acaba de habilitar al portfolio un nuevo Servicio! 
  Ahora se puede ver los posts que hizo un usuario y sus respuestas correspondientes.
   El mismo esta corriendo actualmente con código asincrónico estableciendo 
   pedidos XHR encadenados dependientes de cada uno.
*/

traerUsuarios = new Promise(function(aceptar,rechazar){
  resolver("https://jsonplaceholder.typicode.com/users",
        (usuarios)=>{
          let fragmento = document.createDocumentFragment()
          usuarios.forEach(function(user){
            let option = document.createElement('option')
            option.value = user.id
            option.innerText = user.name
            fragmento.appendChild(option)
            aceptar(usuarios)
            document.querySelector("#usuario-select").appendChild(fragmento)
            document.querySelector("#usuario-select").addEventListener("change",handleChange)
        }, 
        ()=>{
              let text = "fallo el pedido de usuario"
              rechazar(text)
        } 
      )
  })
})

       

  //2) Crear una función llamada get que tome como parámetros una URL , un Método y un Callback para errores y para respuestas positivas. La misma deberá crear una solicitud XHR utilizando la API de Promesas y devolver una Promise ya instanciada. Refactori

  //BONUS
       
  //1) Refactorizar tu código anterior y usar solamente la API de Fetch para encadenar todo el pedido