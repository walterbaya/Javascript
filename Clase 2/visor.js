/**quiero modificar el source del iframe llenandolo con javascript o  con
 * la informacion de php
 */

 //captura de las etiquetas a

 const enlaces = document.querySelectorAll("a");
 const marco = document.querySelectorAll("iframe");

enlaces.forEach(a => 
    a.addEventListener("click",modificarMarco)
);

function modificarMarco(evento){
    //detenemos el comportamiento por defecto de los eventos para eso usoamos esto.
 
    evento.preventDefault();
 
    //si miramos en la consola el target hace referencia a la etiqueta a la que se le hizo
    //click
 
    console.log(evento);
    const elem = evento.target;
 
    //con esto capturo desde el evento el elemento correspondiente.
}