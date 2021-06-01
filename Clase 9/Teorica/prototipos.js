const persona = {
    nacionalidad: "Argentina",
    edad: 100,
    saludar: function(){
        console.log("hola")
    }
}
const obj = {
    nombre: "Juan",
    dni: 40632587
}

console.log(obj.nombre);        //"Juan"
console.log(obj.nacionalidad); //undefined

//proto es una referencia a otro objeto(un objeto de backup)
obj.__proto__ = persona;

//Busca dentro de sus propiedades la propiedad nacionalidad
//cuando termina esto obj va a preguntarle a persona o sea a su prototipo

console.log(obj.nacionalidad); //Argentina va a ser la respuesta
//el objeto proto es conocido como el objeto por defecto cuando no le asignamos
//cuando creamos siempre la referencia que tendra el prototipo es object


