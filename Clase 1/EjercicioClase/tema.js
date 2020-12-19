var btn = document.getElementById("btn");
var TEXTO_APAGAR = "Apagar la luz";
var TEXTO_ENCENDER = "Encender la luz";
btn.textContent = TEXTO_APAGAR;
btn.onclick = function () {
    //toggle se fija si la clase tiene oscuro entonces la quita, sino la agrega 
    document.body.classList.toggle("oscuro");
    btn.textContent = (document.body.classList.contains("oscuro")) ? TEXTO_ENCENDER : TEXTO_APAGAR;
}