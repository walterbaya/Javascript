var person = (function() {
    var name = "";
    var surname = "";

    function getName(){
        console.log("your name is: " + name);
    };
    function privateFunction1(){
        console.log("your surname is: " + surname);
    };
    function setName(n){
        name = n;        
    };
    function privateFunction2(s){
        surname = s;
    };
    return{
        set: setName,
        get: getName
    }
})();

person.set("Raul");
person.get();