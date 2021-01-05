//ES5

var total = 10;
var total = 0;

//Usar var ensucia el objeto window.

/* Javascript lee en realidad total=0 como si
   fuera una asignación.No tira errores,
   pero quizas esta rompiendo la logica de nuestro
   programa.*/

//ES6

let cantidad = 56;
//let cantidad = 79;

/*let funciona muy similar a var, entiende
igualmente que estamos redefiniendo la variable
por lo que nos va a dar un error.
Uncaught SyntaxError: Identifier 'cantidad' has already been declared
es positivo esto porque no nos permite otra vez crear variable cantidad igual
LAS VARIABLES ESCRITAS CON LET SON MAS SEGURAS
QUE LAS VARIABLES DE VAR.
*/

 //window.total
 //cada vez que creamos una variable global con
 //var se agrega como una propiedad en window.

//en cambio las variables let no queda en window.

/*para mantener vieja compatibilidad direcramente se
creo el nuevo operador let. */

var IVA  = 21;
IVA++;

//CONSTANTES
/**Una constante va en mayuscula, si va en mayuscula se
 * supone que no deberiamos modificar el valor de esta variable
 en cambio si esta en minuscula si se le puede modificar el valor.
 es meramente una convencion*/

 /**Hasta javascript 5 era meramente una convencion, pero en javascript 6
  * se agrego la verdadera posibilidad de crear constantes.
  */

  //ES6
  const PI = 3.14;
  //PI++;

  // Assignment to constant variable.

  //es decir no podemos modificar una constante
  //se sigue usando la convencion de poner en mayuscula las constantes.

  const persona = {nombre: "Juan", edad: 34}

  //nadie prohibe crear una constante en minuscula
  //entonces si hay alguna constante en minuscula,
  /**Las constantes con valor primitivo por convencion van en mayuscula
   * en cambio un objeto va en minuscula aunque el objeto sea constante.
   */

   persona.edad++;

   /**persona tiene guardada una referencia a memoria constante.
    * notar que es un puntero a memoria constante es decir que no cambia
    * la referencia es loconstante siempre apunta a lo mismo
    * no se le puede pedir que despues apunte a otro lado
    * pero esta bien cambiar la edad, el contenido de lo que apunta, o sea
    * las propiedades del objeto al cual apunta persona eso si puede ser modificado.
    */

    /*persona = {clima = "frio"};
    esto si da error por lo visto arriba*/
    /**Siempe que se pueda hacer algo constante es mejor
     * hacerlo, hay que usarlas en cualquier lenguaje de programacion.
     */