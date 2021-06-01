/**Ejercicio 1
Implementar un método llamado mapear que esté disponible en cualquier array creado bajo el
constructor Array que nos permita retornar un array a partir de otro. Similar al forEach que 
itera sobre un array , pero con retorno. El mismo deberá tomar como parámetro una función que
reciba como parámetros el elemento del array , el índice y todo el array completo y tendrá que
retornar una expresión que va a ser el nuevo valor del nuevo array bajo el mismo índice.*/
//La especificacion es un asco, voy a suponer que lo que debe hacer es retornar un nuevo
//array a partir del original el cual dado un conjunto de indices y un elemento reemplaza
//los valores del array por los de elem segun el conjunto de indices.

//Quiero agregar un metodo a el prototipo del objeto Array, de esa manera cuando cree una
//instancia lo que ocurrira es que se heredara en el prototype este metodo haciendo que
//cualquier instancia de array pueda utilizarlo.

Array.prototype.mapear = function(elem, indices, array){
    let res = array;
    for (var i = 0; i < indices.length; i++) {
        res[indices[i]] = elem;
    }
    return res;
}


/**Ejercicio 2
Implementar un método llamado filtrar que esté disponible en cualquier array creado bajo el
constructor Array que nos permita filtrar un array en base a sus elementos bajo una condición
determinada. El mismo deberá tomar como parámetro una función que reciba como parámetros
el elemento del array y el índice y devolverá true si la condición se cumple y false de lo contrario.
Cada valor con return true formará parte del nuevo array.*/

/*Mejor especificado... lo que piden es una funcion que dado un elemento, al ser llamada desde un
array, nos devuelva true en las posiciones donde elem coincide con el elemento del array y false
en aquellas en las que no coincida.*/

Array.prototype.filtrar = function(elem){
    let res = [];
    for (var i = 0; i < this.length; i++) {
        if(this[i]==elem){
            res.push(true);
        }
        else{
            res.push(false);
        }
    }
    return res;
}
