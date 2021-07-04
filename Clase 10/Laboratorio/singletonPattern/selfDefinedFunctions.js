/*Self-Defining Functions
Functions can be defined dynamically and can be assigned to variables. If you create a
new function and assign it to the same variable that already holds another function,
you’re overwriting the old function with the new one. In a way, you’re recycling the
old function pointer to point to a new function. And all this can happen inside the body
of the old function. In this case the function overwrites and redefines itself with a new
implementation. This probably sounds more complicated than it is; let’s take a look at
a simple example:*/
var scareMe = function () {
    alert("Boo!");
    scareMe = function () {
        alert("Double boo!");
    };
};
// using the self-defining function
scareMe(); // Boo!
scareMe(); // Double boo!

/*This pattern is useful when your function has some initial preparatory work to do and
it needs to do it only once. Because there’s no reason to do repeating work when it can
be avoided, a portion of the function may no longer be required. In such cases, the selfdefining
function can update its own implementation.*/