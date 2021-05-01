const persona1 = {
    nombre: "Lucas",
    edad: 25,
    saludar: function(){
        console.log(this.nombre);
    }
}

const persona2 = {
    nombre: "Ana",
    edad: 30
}

persona1.saludar();



function presentarse(a, b){
    console.log(this);
    console.log(`Mi nombre es  ${this.nombre}`);
    console.log(`Mi Edad es  ${this.edad} años`);
}

presentarse(10, 20);
//cuando una funcion es llamada por nadie es como si window la hubiera llamado
//this es el objeto que llamó a la función.

//Otra manera de llamar a la función es llamando su
//gemelo malvado 

presentarse.call(persona2,10,20);

//Se puede pasar un objeto como primer parametros
//si llamamos con call estamos definiendo quien es this

//Usando apply con un array de datos
presentarse.apply(persona2,[10,20]);

//Tercer hermano gemelo. 

//El unico parametro es el objeto this
//ejecutar esto devuelve una funcion que podemos
//utilizar 
var presentarseAna = presentarse.bind(persona2);

//Voy a ejecutar esta funcion en el futuro, la guardo personalizada.
//Puedo llamarla con los parametros

presentarseAna(80,0);
presentarseAna(100, 200);
presentarseAna(2,2);

//bind se usa mucho en los frameworks, sirve para poder ejecutar una funcion
//en el futuro asegurandonos que la el this es lo que nosotros
//queremos.