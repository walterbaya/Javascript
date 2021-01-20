let inputs = document.querySelectorAll("input,textarea");

inputs.forEach(function(input) {
    input.addEventListener("focus", function(e) {
        e.target.parentNode.children[0].classList.add("subir")
        e.target.parentNode.classList.add("animacionBorde")
    });

    input.addEventListener("blur", function(e) {
        if (e.target.value.length <= 0) {
            e.target.parentNode.children[0].classList.remove("subir")
        }
        e.target.parentNode.classList.add("animacionBorde")
    });
});

let name = document.getElementById("nombre");
let surname = document.getElementById("apellido");
let email = document.getElementById("email");
let reemail = document.getElementById("reemail");
let password = document.getElementById("password");
let title = document.getElementById("titulo");
let message = document.getElementById("mensaje");
let submit = document.querySelector("form");


let getWords = (s, a) => {
    let res = [];
    let aux = s.split("" + a);
    aux.forEach(w => {
        if (w != "") {
            res.push(w);
        }
    })
    return res;
}

let validateNames = (e, l) => {
    let n = e.target;
    let palabra1;
    let palabra2;
    let s = n.value;
    let words = getWords(s, " ");
    switch (words.length) {
        case 0:
            n.className = "error";
            n.setCustomValidity("El " + e.target.id + " No puede estar vacío");
            alert("El " + e.target.id + " No puede estar vacío   ");
            break;
        case 1:
            palabra1 = words[0];
            if (palabra1.length < l) {
                n.className = "error";
                n.setCustomValidity("La palabra debe tener tamaño de al menos: " + l);
            } else {
                n.className = "success";
                n.setCustomValidity("");
            }
            break;
        default:
            palabra1 = words[0];
            palabra2 = words[1];
            if (palabra1.length < l || palabra2.length < l) {
                n.className = "error";
                n.setCustomValidity("Las palabras deben tener tamaño de al menos: " + l);
            } else {
                n.className = "success";
                n.setCustomValidity("");
            }
    }
}

/*
//Continuando con una extension del formulario de la clase pasada, esta vez ademas de animarlo vamos a intentar validarlo
//1)Asignarle un evento de blur a cada input del formulario de manera tal que se cumplan las siguientes validaciones sin usar expresiones regulares :

//1.1)nombre : El nombre debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos dos letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.

nombre.addEventListener("blur", e => validateNames(e, 2));


//1.2)apellido : El apellido debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos cuatro letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.

apellido.addEventListener("blur", e => validateNames(e, 2));

//1.3)email : El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_. 

validarMail = (variable, e) => {
    let n = e.target;
    let error = false;
    let dosPartes = getWords(n.value, "@");
    if (dosPartes.lenght == 2) {
        if (dosPartes[1].endsWith(".com")) {
            console.log(dosPartes);
            if (dosPartes[1].lenght > 3) {
                n.setCustomValidity("Error, el " + variable + " debe respetar el formato nombre@dominio.com");
                n.className = "error";
                alert("Error, el " + variable + " debe respetar el formato nombre@dominio.com");
                error = true;
            } else {
                n.setCustomValidity("");
                n.className = "success";
            }
        } else {
            n.setCustomValidity("Error, el " + variable + " debe finalizar en .com");
            n.className = "error";
            alert("Error, el email debe finalizar en .com");
            error = true;
        }
    } else {
        n.setCustomValidity("");
        n.className = "error";
        alert("Error, el " + variable + " debe respetar el formato nombre@dominio.com");
        error = true;
    }
}

email.addEventListener("blur", e => {
    validarMail("email", e);
});


//1.4)reemail : Su valor debe ser identico al de email

reemail.addEventListener("blur", e => {
    let error = validarMail("mail", e);
    if (error == false) {
        if (e.target.value == email.value) {

        } else {
            e.target.className = "error";
            alert("Error, el reemail debe ser igual al email.");
            error = true;
        }
    }
});




//1.5)contraseña : La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-.

//se recibe un codigo unicode
isValidCaracterForPassword = (l) => {
    if ((97 <= l && l <= 122) || (65 <= l && l <= 90) || l == 63 || l == 33 || l == 95) {
        return true;
    } else {
        return false;
    }
}

//se recibe una oracion
allCaractersValid = (sentence) => {
    let res = true;
    for (let i = 0; i < sentence.length && res; i++) {
        res = isValidCaracterForPassword(sentence[i].charCodeAt());
    }
    return res;
}

password.addEventListener("blur", (e) => {
    validateNames(e, 6);
    if (e.target.value != "") {
        if (!allCaractersValid(e.target.value)) {
            e.target.className = "error";
            e.target.setCustomValidity("Las palabras deben tener tamaño de al menos: " + 6);
            alert("Hay caracteres invalidos, recuerde que solo se pueden usar letras minusculas y mayusculas y ? ! - _  para el password");
        } else {
            e.target.className = "success";
            e.target.setCustomValidity("");
        }
    }
})

//1.6)titulo : El titulo puede ser opcional. Si el mismo está faltante, se debe usar el string "Post Anonimo"

titulo.addEventListener("blur", e => {
    if (e.target.value == "") {
        e.target.parentNode.children[0].classList.add("subir");
        e.target.parentNode.classList.add("animacionBorde");
        e.target.value = "Post Anonimo";
    }
});


//1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.

let valorMensaje;
mensaje.addEventListener("blur", e => {

    if (e.target.value == "") {
        alert("El mensaje debe tener al menos una letra");
        e.target.setCustomValidity("El mensaje debe tener al menos una letra");
    } else {
        e.target.setCustomValidity("");
        valorMensaje = escape(e.target.value);
    }
});







//2)Si no cumplieran con lo requerido, los mismos deberán mostrar un mensaje de error customizado utilizando la API de validación de HTML5 que le corresponda en cada caso. El elemento deberá además tener la clase error. 
//3)Si cumplieran con lo requerido deberán tener la clase success.

//4)Realizar las mismas operaciones pero esta vez dentro de un evento submit que deberá estar registrado en el formulario.

*/

//BONUS :
//5)Realizar las mismas validaciones usando RegExp.

//1 VER

nombre.addEventListener("blur", e => {
    let n = e.target;
    let re = /^\w{2,}(\s+\w{2,})?$/;
    if (re.test(n.value)) {
        n.className = "success";
        n.setCustomValidity("");
    } else {
        n.className = "error";
        n.setCustomValidity("El nombre debe ser de la forma primerNombre SegundoNombre, con el segundoNombre opcional y ambos deben tener dos letras como mínimo.");
        alert("El nombre debe ser de la forma primerNombre SegundoNombre, con el segundoNombre opcional y ambos deben tener dos letras como mínimo.");

    }
});

//2
apellido.addEventListener("blur", e => {
    let n = e.target;
    let re = /^\w{4,}(\s+\w{4,})?$/;
    if (re.test(n.value)) {
        n.className = "success";
        n.setCustomValidity("");
    } else {
        n.className = "error";
        n.setCustomValidity("El Apellido debe ser de la forma Apellido SegundoApellido, con el segundoApellido opcional y ambos deben tener cuatro letras como mínimo.");
        alert("El Apellido debe ser de la forma primerApellido SegundoApellido, con el segundoApellidoopcional y ambos deben tener cuatro letras como mínimo.");
    }
});
//3

email.addEventListener("blur", e => {
    let n = e.target;
    let exp = /^\w+(@)\w+\.(com)$/
    if (exp.test(n.value)) {
        n.className = "success";
        n.setCustomValidity("");
    } else {
        alert("Error, el mail debe seguir el siguiente formato nombre@dominio.com y no debe contener espacios delante ni detras.");
        n.setCustomValidity("Error, el mail debe seguir el siguiente formato nombre@dominio.com y no debe contener espacios delante ni detras.");
        n.className = "error";
    }
});
//4

reemail.addEventListener("blur", e => {
    let n = e.target;
    if (n.value == email.value) {
        n.className = "success";
        n.setCustomValidity("");
    } else {
        alert("Error, el remail debe ser igual al email.");
        n.setCustomValidity("Error, el remail debe ser igual al email.");
        n.className = "error";
    }
});

//5

//La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-

password.addEventListener("blur", e => {
    let reg = /^[a-z?!_-]{6,}$/;
    if (reg.test(e.target.value)) {
        n.className = "success";
        n.setCustomValidity("");
    } else {
        alert("Error");
        n.setCustomValidity("Error, La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-");
        n.className = "error";
    }
});

//6

titulo.addEventListener("blur", e => {
    let reg = /\w+/;
    if (reg.test(e.target.value)) {

    } else {
        e.target.parentNode.children[0].classList.add("subir");
        e.target.parentNode.classList.add("animacionBorde");
        e.target.value = "Post Anonimo";
    }
});

//7

mensaje.addEventListener("blur", e => {
        let reg = /\w+/;
        if (reg.test(e.target.value)) {
            e.target.setCustomValidity("");
            valorMensaje = escape(e.target.value);
        } else {
            alert("El mensaje debe tener al menos una letra");
            e.target.setCustomValidity("El mensaje debe tener al menos una letra");
        }
    })
    //1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.









submit.addEventListener("submit", e => {
    //cracion de un evento blur y su lanzamiento
    e.preventDefault();
    //despacho los eventos para que si hay algun error directamente se encarguen ellos.
    const event = new Event("blur");
    inputs.forEach(elem => {
        elem.dispatchEvent(event);
    });

});