class Listado {
    constructor({
        elem,
    }) {
        this.elem = elem;
        this.items = [];
        this.render();
    }
    render() {
        this.elem = `
        <ul>
            ${this.items.map(item => `<li class="${item.clase}">${item.texto}</li>`).join("")}    
        </ul>
        `
    }
    agregarItem(item) {
        this.items.push(item);
        this.render();
    }
}