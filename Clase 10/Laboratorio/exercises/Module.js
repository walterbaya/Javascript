var person = (function() {
    var name = "";
    var surname = "";

    return{
        getName: function(){
            console.log("your name is: " + name);
        },
        getSurname: function(){
            console.log("your surname is: " + surname);
        },
        setName: function(n){
            name = n;        
        },
        setSurname: function(s){
            surname = s;
        }
    }
})();

person.setName("Raul");
person.setSurname("Rodriguez");

