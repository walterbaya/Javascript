/*In JavaScript, the module pattern is used to further emulate the concept of classes in
such a way that we're able to include both public/private methods and variables inside
a single object, thus shielding particular parts from the global scope What this results
in is a reduction in the likelihood of your function names conflicting with other functions
defined in additional scripts on the page.

The pattern is
quite similar to an immediately-invoked functional expression (IIFE - see the section
on namespacing patterns for more on this) except that an object is returned rather than
a function.*/

var testModule = (function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      console.log("counter value prior to reset:" + counter);
      counter = 0;
    },
  };
})();
// test
testModule.incrementCounter();
testModule.resetCounter();
