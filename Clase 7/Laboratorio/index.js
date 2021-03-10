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

/*
function handleChange(){
  let promesa = new Promise(function(aceptar,rechazar){
  resolver("https://jsonplaceholder.typicode.com/users/1",
        (response)=>{
          aceptar(response)
        }, 
        ()=>{
          let text = "fallo el pedido de usuario"
          rechazar(text)
        } 
      )
  })


promesa
  .then(user => {
    return new Promise(function(aceptar,rechazar){
    resolver("https://jsonplaceholder.typicode.com/posts?userId=" + user.id,
        (posts)=>{
          aceptar(posts)
        }, 
        ()=>{
          let text = "fallo la promesa de pedido de posts"
          rechazar(text)
        } 
      )
    })
  })
  .then(posts => {
    return new Promise(function(aceptar,rechazar){
    posts.forEach(post => {
      resolver("https://jsonplaceholder.typicode.com/comments?postId=" + post.id,
        (comentarios)=>{
          aceptar(comentarios);
        }, 
        ()=>{
            const text = "fallo la búsqueda de comentarios"
            rechazar(text)
        } 
      )
    })
    })
  })
  .catch(valor => {
    console.log(valor)
  })

}

*/

/*Se le acaba de habilitar al portfolio un nuevo Servicio! 
  Ahora se puede ver los posts que hizo un usuario y sus respuestas correspondientes.
   El mismo esta corriendo actualmente con código asincrónico estableciendo 
   pedidos XHR encadenados dependientes de cada uno.
*/

/*
function traerUsuarios(){
  const promesa = new Promise(function(aceptar,rechazar){
  resolver("https://jsonplaceholder.typicode.com/users",
        (usuarios)=>{
          aceptar(usuarios)
        }, 
        ()=>{
          let text = "fallo el pedido de usuario"
          rechazar(text)
        } 
      )
  })

promesa
  .then(usuarios =>{
    let fragmento = document.createDocumentFragment()
    usuarios.forEach(user => {
      let option = document.createElement('option')
      option.value = user.id
      option.innerText = user.name
      fragmento.appendChild(option)
      document.querySelector("select#usuario-select").appendChild(fragmento)
      document.querySelector("select#usuario-select").addEventListener("change",handleChange)
    })
  })
  .catch(text => {
    console.log(text)
  })
} 
  
    

  //2) Crear una función llamada get que tome como parámetros una URL,
  // un Método y un Callback para errores y para respuestas positivas.
  // La misma deberá crear una solicitud XHR utilizando la API de Promesas y devolver una Promise ya instanciada.
  // Refactorizar codigo

  //Esto ya lo hice desde un primer momento así que no voy a repetir, funcion no se llama get se llama resolver.

  //BONUS
       
  //1) Refactorizar tu código anterior y usar solamente la API de Fetch para encadenar todo el pedido

*/ 

const promesa = fetch("https://jsonplaceholder.typicode.com/users/1")
console.log(promesa)
promesa
  .then(usuario => usuario.json())
  .then(usuario => {
    return fetch("https://jsonplaceholder.typicode.com/posts?userId=" + usuario.id)
  })
  .then(PromesaPosts => {return PromesaPosts.json()})
  .then(posteos => 
    {
      let ArrayPromesasDeComentarios = []
      posteos.forEach(post => 
        {
          const promesaComentario = fetch("https://jsonplaceholder.typicode.com/comments?postId=" + post.id)
          ArrayPromesasDeComentarios.push(promesaComentario)
        } 
      )
      return ArrayPromesasDeComentarios
    }
  )
  .then(promesasDeComentarios => {
    promesasDeComentarios.forEach(promesaComentario => 
     {   
      promesaComentario.then(response => console.log(response))
     })
  })

function traerUsuarios(){
const promesa = fetch("https://jsonplaceholder.typicode.com/users");
  promesa
    .then(usuarios => usuarios.json())
    
    .then(usuarios => {
        let fragmento = document.createDocumentFragment()
        usuarios.forEach(user => {
        let option = document.createElement('option')
        option.value = user.id
        option.innerText = user.name
        fragmento.appendChild(option)
        document.querySelector("select#usuario-select").appendChild(fragmento)
        document.querySelector("select#usuario-select").addEventListener("change",handleChange)
    })
    })
}
