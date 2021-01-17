let inputs = document.querySelectorAll("input,textarea");

inputs.forEach(function (input) {
    input.addEventListener("focus", function (e) {
        e.target.parentNode.children[0].classList.add("subir")
        e.target.parentNode.classList.add("animacionBorde")
    });

    input.addEventListener("blur", function (e) {
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


let getWords = (s) => {
    let res = [];
    let aux = s.split(" ");
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
    let words = getWords(s);
    switch (words.length) {
        case 0:
            n.className = "error";
            n.setCustomValidity("El " + e.target.id + " No puede estar vacío");
            alert("El " + e.target.id + " No puede estar vacío");

            break;
        case 1:
            palabra1 = words[0];
            if (palabra1.length < l) {
                n.className = "error";
                n.setCustomValidity("La palabra debe tener tamaño de al menos: " + l);
                alert("La palabra debe tener tamaño de al menos: " + l);
            }
            else {
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
                alert("Las palabras deben tener tamaño de al menos: " + l);
            }
            else {
                n.className = "success";
                n.setCustomValidity("");
            }
    }
}


//Continuando con una extension del formulario de la clase pasada, esta vez ademas de animarlo vamos a intentar validarlo
//1)Asignarle un evento de blur a cada input del formulario de manera tal que se cumplan las siguientes validaciones sin usar expresiones regulares :

//1.1)nombre : El nombre debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos dos letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.

nombre.addEventListener("blur", e => validateNames(e, 2));


//1.2)apellido : El apellido debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos cuatro letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.

apellido.addEventListener("blur", e => validateNames(e, 2));

//1.3)email : El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_. 
//1.4)reemail : Su valor debe ser identico al de email
//1.5)contraseña : La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-.

//se recibe un codigo unicode
isValidCaracterForPassword = (l) => {
    if ((97 <= l && l <= 122) || (65 <= l && l <= 90) || l == 63 || l == 33 || l == 95) {
        return true;
    }
    else {
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
            alert("Hay caracteres invalidos, recuerde que solo se pueden usar letras minusculas y mayusculas y ? ! - _ ");
        }
        else {
            e.target.className = "success";
            e.target.setCustomValidity("");
        }
    }
})

//1.6)titulo : El titulo puede ser opcional. Si el mismo está faltante, se debe usar el string "Post Anonimo"
//1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.





//2)Si no cumplieran con lo requerido, los mismos deberán mostrar un mensaje de error customizado utilizando la API de validación de HTML5 que le corresponda en cada caso. El elemento deberá además tener la clase error. 
//3)Si cumplieran con lo requerido deberán tener la clase success.
//4)Realizar las mismas operaciones pero esta vez dentro de un evento submit que deberá estar registrado en el formulario.

submit.addEventListener("submit", e => {
    //cracion de un evento blur y su lanzamiento 

});












//BONUS :
//5)Realizar las mismas validaciones usando RegExp.


