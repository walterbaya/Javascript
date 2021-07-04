/*                                    Instance in a Static Property

Here’s an example of caching the singular instance in a static property of the Universe constructor:*/

function Universe() {
    /*do we have an existing instance? if not typeof is going to say "undefined"*/

    if (typeof Universe.instance === "object") {
        console.log(Universe.instance)
        return Universe.instance;
    }
    //proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    //cache
    Universe.instance = this;
    //implicit return:
    //return this;
}
//testing
//var uni = new Universe();
//var uni2 = new Universe();
//uni === uni2; // true

/*The problem with this is that attribute instance is public, so we can change it and it can cause problems, because we 
could change firste instance...*/



/**Instance in a Closure
Another way to do the class-like singleton is to use a closure to protect the single instance.
You can implement this by using the private static member pattern discussed
in Chapter 5. The secret sauce here is to rewrite the constructor:*/

function Universe() {
    // the cached instance
    var instance = this;
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    // rewrite the constructor
    //Self defined function
    Universe = function () {
        return instance;
    };
}
// testing
//var uni = new Universe();
//var uni2 = new Universe();
//uni === uni2; // true */

