class Editorial {
    constructor(n) {
        this.nombre = n;
        this.suscriptores = [];
    }
    publicarLibro(titulo) {
        console.log(this.nombre + " publicó" + titulo + "'");
        //observador1(titulo); hay que evitar el acomplamiento
        //es decir evitar que yo meta funciones que es posible que no tenga mas adelante
        //dentro de una clase no debe haber llamado a otras funciones que no sean de mi clase.
        this.notificar(titulo);
    }
    suscribir(observador) {
        this.suscriptores.push(observador);
    }
    //desuscribir(){}
    notificar(t) {
        this.suscriptores.forEach(fn => fn(t));
    }
}

//Cuando recibe un libro se pone a escribir una reseña
const observador1 = titulo => console.log("%cEscribiendo reseña de " + titulo, "color:red");
//Cuando recibe un libro va a comprarlo inmediatamente
const observador2 = titulo => console.log("%cIr a comprar " + titulo, "color:green");

//no las vamos a ejecutar nosotros a mano, sino que vamos a dejar que se ejecuten solas.

const editorialAlfa = new Editorial("Alfa");
editorialAlfa.suscribir(observador1);