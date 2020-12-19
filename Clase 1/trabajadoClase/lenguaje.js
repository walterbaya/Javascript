        //Operador VAR, es para crear una nueva variable
        //como es debilmente tipado, las variables no tienen tipo
        //pueden recibir cualquier tipo de dato, podria guardar un numero
        //y luego una cadena en total y no pasa nada  
        var total;   //undefined de momento
        console.log(total); 

        //Asignar un valor a una variable. 
        total = 100;   
        console.log(total);   //devolvera 100 
        //BAJAR LIVESERVER LA EXTENSION QUE AYUDA A ABRIR EL NAVEGADOR COMO EN SUBLIME
        //USANDO CONTROL DERECHO
        //Es importante tener el html en una carpeta y desde el visual studio code abrirla
        //luego recien ahi se puede utilizar el liveserver
        
        //boton derecho inspeccionar en la pagina web y asi poder ir a console
        //el CONSOLELOG imprime en la consola, se puede ver en la consola del navegador.
        
        var totalPagar;
        var luz = 500;
        var agua = 400;
        
        //definicon y asignacion a la vez 
        totalPagar = luz + agua;

        console.log(totalPagar);

        //Valores primitivos,
        //Numeros enteros, decimales, booleanos, null
        //cadenas de doble y simple comilla, undefined
        //simbolos(javascript mas avanzado)
        
        //valores complejos, o valores de objetos

        //Arrays, Objects, Function

        var a = 5;
        var b = a; 
        //b toma una copia de a, si luego modifico a no altera b
        a++;
        console.log(b);
        console.log(a);
        
        //Objeto en javascript

        var personaX = {nombre : "Juan", casado: false, edad: 24};
        personaX.edad++;

        var personaW = personaX;
        
        console.log(personaX.edad);
        console.log(personaW.edad);

        //Objects 
        //es como una bolsa de propiedades
        // dia es la clave y 20 es el valor.
        var fecha = {
            dia: 20,
            mes: "Abril",
            anio: 2020,  //lo mejor es evitar la ñ
            obtener: function(){console.log("Hola");}
        };
        //una funcion puede ser tambien parte del objeto
        //las funciones con clave, como por ejemplo obtener
        //son llamadas metodos.

        //utilizar la notacion de punto

        console.log(fecha.mes); //"abril" 
        fecha.anio = 2010;

        //notacion de corchetes 

        console.log(["mes"]); //accedo al valor abril por medio de la
                              //notacion de corchetes
                              //siempre va la clave en cadena de caracteres

       //siempre que sea posible utilizar la notacion de punto, porque es mas eficiente

        var propiedad = "dia";
        console.log(fecha[propiedad]);        

        //esta manera sirve para mostrar pero de forma dinamica
    
        //utilizando javascript para modificar html

    
