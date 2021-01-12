const formulario = document.getElementById("frmBase");
formulario.addEventListener("submit", validar);


//FUNCIONES
function validar(e) {
    const inputEmail = formulario.querySelector("input[name=email]");
    const inputClave = formulario.querySelector("input[name=clave]");

    //destruye el comportamiento por //defecto del formulario 

    let errores = [];
    //Buscar errores
    if (inputEmail.value == "") {
        errores.push("Falta el email");
    }

    if (inputClave.value == "") {
        errores.push("Falta la clave");
    }


    //determinar si envio el formulario.
    let f = document.createDocumentFragment();
    if (errores.length) {

        const ul = document.querySelector("ul");

        //Manera optima de reiniciar el ul si no lo esta.
        let hijo;
        while (hijo = ul.lastchild) {
            hijo.remove;
        }


        e.preventDefault();
        errores.forEach(err => {
            let li = document.createElement("li");
            li.textContent = err;
            f.appendChild(li);
        })
        ul.appendChild(f);
    } else {
        alert("Gracias por completarlo.");
    }


}