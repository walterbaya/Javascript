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

//Continuando con una extension del formulario de la clase pasada, esta vez ademas de animarlo vamos a intentar validarlo
//1)Asignarle un evento de blur a cada input del formulario de manera tal que se cumplan las siguientes validaciones sin usar expresiones regulares :
//1.1)nombre : El nombre debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos dos letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.
//1.2)apellido : El apellido debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos cuatro letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.
//1.3)email : El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_.  
//1.4)reemail : Su valor debe ser identico al de email
//1.5)contraseña : La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-.
//1.6)titulo : El titulo puede ser opcional. Si el mismo está faltante, se debe usar el string "Post Anonimo"
//1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.
//2)Si no cumplieran con lo requerido, los mismos deberán mostrar un mensaje de error customizado utilizando la API de validación de HTML5 que le corresponda en cada caso. El elemento deberá además tener la clase error. 
//3)Si cumplieran con lo requerido deberán tener la clase success.
//4)Realizar las mismas operaciones pero esta vez dentro de un evento submit que deberá estar registrado en el formulario. 
//BONUS : 
//5)Realizar las mismas validaciones usando RegExp.

//EJERCICIO 1

//item 1
let nombre = document.getElementById("nombre");