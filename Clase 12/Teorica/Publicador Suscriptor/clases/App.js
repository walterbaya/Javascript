const formPros = new Formulario({
    elem: document.getElementById("sectionPros"),
    evento: "envio_pro"
});
const formContras = new Formulario({
    elem: document.getElementById("sectionContras"),
    evento: "envio_contra"
});

const listadorPros = new Listado({
    elem: document.getElementById("listadoPros")
});

const listadorTotal = new Listado({
    elem: document.getElementById("listadoTotal")
});

const listadorContra = new Listado({
    elem: document.getElementById("listadoContra")
});

const contador = new Contador({
    elem: document.getElementById("contador")
});

//Ejecuta todos los callback dentro de los observadores de envio pro.
//Es necesario pasar el listado pros en el this para que pueda acceder.
EventBus.suscribe('envio_pro', listadoPros.agregarItem.bind(listadoPros));
EventBus.suscribe('envio_pro', listadoTotal.agregarItem.bind(listadoTotal));
EventBus.suscribe('envio_contra', listadoContra.agregarItem.bind(listadoTotal));
EventBus.suscribe('envio_pro', listadoPros.agregarItem.bind(listadoContra));
EventBus.suscribe('AgregarALista', listadoPros.agregarItem.bind(listadoContra));
document.addEventListener('envio_pro', e => EventBus.notify('envio_pro', e.detail));
document.addEventListener('envio_contra', e => EventBus.notify('envio_contra', e.detail));
document.addEventListener('agregarALista', e => EventBus.notify('AgregarALista', e.detail));

