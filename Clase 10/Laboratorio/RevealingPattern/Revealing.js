/**you would simply define all of
your functions and variables in the private scope and return an anonymous object at
the end of the module along with pointers to both the private variables and functions
you wished to reveal as public.
Ve put in the object the pointers to functions that we wish to make public, or attributes.
*/

var myRevealingModule = (function () {
    var name = 'John Smith';
    var age = 40;
    function updatePerson() {
        name = 'John Smith Updated';
    }
    function setPerson() {
        name = 'John Smith Set';
    }
    function getPerson() {
        return name;
    }
    return {
        set: setPerson,
        get: getPerson
    };
}());
// Sample usage:
myRevealingModule.get();

/**The Revealing Module Pattern allows the syntax of your script to be fairly consistent - it
makes it very clear at the end which of your functions and variables may be accessed
publicly, something that is quite useful. In addition, you are also able to reveal private
functions with more specific names if you wish. */