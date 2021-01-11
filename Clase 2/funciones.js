//definicion de la funcion

//parametros con 3 puntos adelante, es una parametro RESTO.
//es el operador RESTO.
//en el se van a almacenar todos los parametros que no se correspondian con ningun 
//parametro que estaba asociado.
function sumar(a,b,...r){
    console.log(r); 
    //la variable arguments
    /**No es un array es una especie de array en el cual solo podemos usar
     * el for comun metiendole los valores que queremos que haya como parametro.
     */
    console.log(arguments);
    return a + b;
}

//funcion que recibe una cantidad de parametros que no
//que no sabemos cuantos son.
function sumar(...r){
    let total = 0;
    //para cada elemento de r ejecutar las
    //funcion que le agrega a total el num.
    r.forEach(function(num){
        total +=num;
    });

}

//llamado de la funcion.

//no hay error por pasar cosas de mas
//sumar(10, 20, 15, 56, 100);

let res = sumar(1,4,5,6);
console.log(res);

//En general las variables globales pueden generar diversos problemas.
