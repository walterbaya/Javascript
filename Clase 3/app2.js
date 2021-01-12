//referencias del DOM
const formulario = document.getElementById("frmBase");
const inputEmail = formulario.querySelector("input[name=email]");
const inputClave = formulario.querySelector("input[name=clave]");

inputEmail.addEventListener("blur", e => {

    //Capturamos el label padre del Email
    let label = inputEmail.parentElement;

    //Obtenemos el span
    let span = label.querySelector("span");

    if (!validarEmail(inputEmail.value)) {
        span.innerText = "el email no tiene el formato esperado.";
    } else {
        span.textContent = "ok";
    }
});

inputClave.addEventListener("blur", e => {
    let span = inputClave.parentElement.querySelector("span");
    if (validarClave(inputClave.value)) {
        span.textContent = "el email no tiene el formato esperado.";
    } else {
        span.textContent = "ok";
    }
});

formulario.addEventListener("submit", e => {
    let errores = false;
    const objEventBlur = new Event("blur");

    inputEmail.dispatchEvent(objEventBlur);
    inputClave.dispatchEvent(objEventBlur);

    if (inputEmail.parentElement.classList.contains("error") ||
        inputClave.parentElement.classList.contains("error")) {

    }
    errores = true;
    if (errores) {
        e.preventDefault();
        alert("Corregi los errores marcados en rojo!");
    } else {

    }
});


//Expresiones regulares: Cadenas que sirven como patron para ver
//comparando con dicho patron el texto que tengamos y de ahi notar si cumple 
//nuestro formato.