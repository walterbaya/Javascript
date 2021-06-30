//Lo que es privado lo saco fuera de la clase.
let _tokenAdmin = "qwerty2020";

class Usuario{
    constructor(opciones){
        this.nombre = opciones.nombre;
        this.apellido = opciones.apellido;
        this.clave = opciones.clave || "a";
        this.tipo = opciones.tipo || "user";
        //_ es para decir que es privado.
    }
    presentarse(){  
        console.log("Soy" + this.nombre);
    }
    login(){
        console.log("Login..." + this.nombre);
    }

    //Este no es un metodo que le pueda pedir a una instacia
    //este metodo se lo pediriamos a la funcion constructora
    //estos metodos son llamados metodos de clase, ya que solamente
    //tiene responsabilidad la clase como madre, por ejemplo quien
    //pueda saber la cantidad de instancias de la clase es la clase misma.
    static cantidadInstancias(){
        return Usuario.instancias;
    }
    //Es un dato que quiero que sea privado
    get tokenAdmin(){
        if(this.tipo == "admin"){
            return _tokenAdmin;
        }
        else{
            return null;
        }
        
    }
    set nombreYApellido(nuevoValor){
        let separados = nuevoValor.split(',');
        this.nombre = separados[0];
        this.apellido = separados[1];
    }
}
//Puedo agregarlas al final de agregar la clase.
Usuario.instancias = 0;

//-------------------------------------

const CSSTEXT = "color:orangered";
const usr1 = new Usuario({'nombre': 'j1', 'apellido': 'jo', 'tipo': 'admin'});
const usr2 = new Usuario({'nombre': 'j1', 'apellido': 'jo'});
console.log(Usuario.cantidadInstancias());

//Los metodos get se toman como si fueran propieades del objeto. Para
//El getter es para generar una especie de atributos compuestos o especiales.
//se piden como si fueran atributos
console.log(usr1.tokenAdmin);
console.log(usr2.tokenAdmin);

//Utilizamos los setters.   
usr2.nombreYApellido = "Jose,Luis";
console.log(usr2.nombre + " " + usr2.apellido);

//con super podemos llamar a los metodos de la superclase.

//TypeScript es un superset de javascript, que le agrega tipos de datos
//al hacer esto podemos hacer polimorfismo entre otras cosas, tipescript nos
//permite utilizar interfaces. 
//Para eso se usa TypeScript.