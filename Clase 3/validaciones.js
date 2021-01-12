function validarEmail(email) {
    //regex101 sirve para escribir expresiones regulares.
    //Se guarda un tipo de dato que es una expresion regular

    const expRegEmail = /^[a-z0-9-_\.]+@[a-z0-9]+([a-z]+)*\.[a-z]{2,3}$/;

    //Este email que me pasaron es correcto, si coincide //devuelve true, sino devuelve false
    return expRegEmail.test(email);
}

function validarClave(clave) {
    return clave.trim() != "";
}