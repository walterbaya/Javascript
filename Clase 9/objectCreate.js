/**Los objetos siempre que nosotros le pidamos los valores de una propiedad van a estar buscando en el objeto y sino en su objeto de backup.

Cuando nosotros creamos un objeto por medio de llaves tienen un proto apuntando a Object.prototype
el cual es siempre el mismo, ese objeto es único.

el Object.prototype tiene como proto null. */

const test1 = {};
//Permite crear un nuevo objeto.
//pide que pasemos un parametro
const test2 = Object.create(null);  //Objecto con __proto__ : null
//si pongo null tengo prototipo nulo.
const test3 = Object.create(Object.prototype);
//Con esto tengo el prototipo por defecto de los objetos.

//Los prototipos no deben ser alterables, deben ser de solo
//lectura.
//Object.create(objetoQueSirveComoPrototipo, ObjetoQueDefineLasPropiedadesDelNuevoObjeto)

//Value permite establecer las propiedades de solo lectura
//para que no sean modificables.

const persona = Object.create(Object.prototype, {
    nacionalidad:{value: "Argentina"},
    edad: {value: 100,
            //es sobrescribible
           writable: true,
           //Hace que sea borrable la propiedad
           configurable: true,
           //Permite iterar con un for la propiedad
           enumerable: true
        },
    saludar: {value: function(){
        console.log("Hola");
        }    
    }
});

//Los prototipos no deben ser alterados por ningun objeto que lo use.
//El value define el valor que van a tener las propiedades. Para

const obj = Object.create(persona);
obj.nombre = "Juan";
obj.dni = 400000;

//Todas las propiedades definidas dentro de Object.create  
//quedaran como solo lectura.
//En general todas tienen false las propiedades.



