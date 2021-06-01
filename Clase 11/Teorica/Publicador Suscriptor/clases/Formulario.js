class Formulario {
    constructor({elem, textoBoton="Enviar", titulo}) {
        //Desestructuracion de un objeto
        /*
        this.elem = opciones.elem;
        this.titulo = opciones.titulo;
        this.textoBoton = opciones.textoBoton;
        */
        //Asignacion al reves(desestructuracion)

        //Estoy generando tres variables nuevas
        //es una abreviacion de escribir lo siguiente 
        /*
            const elem = opciones.elem;
            const textoBoton = opciones.textoBoton;
            const titulo = opciones.titulo;
        */
        const {
            elem,
            textoBoton ="Enviar",
            titulo
        } = opciones;

        this.elem = elem;
        this.titulo = titulo;
        this.textoBoton = textoBoton;

        //desestructuracion de un array

        const colors = ["red", "green", "blue", "orange"];
        const [rojo,  verde, azul, naranja] = colors;
        console.log(colors[3]);
        console.log(naranja);

        this.render();
        //this es la instancia de formulario formPros


        //El unico form que existe dentro de mi elemento padre es el que estoy creando.
        //guardo la referencia  en una variable.

        //referencias de dom
        //de esta manera podre guardar todo lo que quiera en
        this.dom = {};
        this.dom.formu = this.elem.querySelector("form");


        //listeners 
        //A la funcion enviar le pone en su this la referencia a form.
        this._enviar = this.enviar.bind(this);
        //guardar la referencia de la fn custom con el this ya seteado.
        formu.addEventListener('submit', this._enviar);
        formu.removeEventListener('submit', this._enviar);

    }
    render() {
        this.elem.innerHTML =
            `<form>
            <h2>${this.titulo}</h2>
            <label for="opinion">Ingresa tu opinion </label>
            <textarea name="opinion"></textarea>
            <button>${this.textoBoton}</button>
        </form>`;
    }
    enviar(e) {
        //aca this depende del llamado
        console.log(this)
        e.preventDefault();
        const textArea = this.dom.formu.querySelector("textarea[name=opinion]");
        if (!textArea.value.trim()) {
            alert("Debe llenar la reseña");
        } else {
            //podriamos hacer un fetch.
        }
    }
}