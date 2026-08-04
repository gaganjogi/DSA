hoisting will work for normal function but not for arrow function
because it will just act like a variable

same remeber execution context is created when function is called

memory and code component

and we can check in callStack

Javascript engine give window object
in global this points to window object

any js program runs at global context global object will be created

even if file is empty js engine will give window object(Global space)

whatever we add in global space we can access it from window object and if not it will give referenceError

in memory creation phase it will add a special placeholder for variable as undefined 

not defined is different and undefined is different
VM2079:1 Uncaught ReferenceError: y is not defined

untill variable is assigned the value

loosly typed language means we can assign any type of value to a variable

when execution context is created lexical environment is created (local memory and its parent environment reference)

finding the elements in the local and it's lexical environment is called scope chain
is nothing but a closure here means c is enclosed in a function and can access it's parent environment(this is closure)