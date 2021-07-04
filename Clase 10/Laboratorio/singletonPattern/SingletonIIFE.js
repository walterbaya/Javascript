
/*An alternative solution would also be to wrap the constructor and the instance in an
immediate function. The first time the constructor is invoked, it creates an object and
points the private instance to it. From the second invocation on, the constructor
simply returns the private variable. All the tests from the previous snippet will work as
expected, too, with this new implementation:*/

//create variable Universe
var Universe;

//this function only its been executed, constructor function Universe its been adapted using This
//this is only for making that private variables couldnt be accesed and 
(function () {
    //After function its been executed private var instance is going to be created
    var instance;

    Universe = function Universe() {
        if (instance) {
            return instance;
        }
        instance = this;
        this.start_time = 0;
        this.bang = "Big";
    };
}());


// update prototype and create instance
Universe.prototype.nothing = true; // true
var uni = new Universe();
Universe.prototype.everything = true; // true
var uni2 = new Universe();
// it's the same single instance
uni === uni2; // true
// all prototype properties work
// no matter when they were defined
uni.nothing && uni.everything && uni2.nothing && uni2.everything; // true
// the normal properties work
uni.bang; // "Big"
// the constructor points correctly
uni.constructor === Universe; // true


//Central things here:

/**
 * 
 * 
 */