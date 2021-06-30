class Contador{
    constructor(elem){
        this.elem = elem;
        this.cantidad = 0;
    }
    render(){
        this.elem.innerHTML = ` Total de reseñas: <span>${this.cantidad}</span>`
    }
    contar(){
        this.cantidad++;
        this.render();
    }
}