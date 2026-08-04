if x declared using let then it will give reference error as not initialized error like that 
as it will be not there in global object

and time between declaration and initialization is called temporal dead zone

as when we declare for var it will be in global object but let and const will be not there in window object (seperate script)

syntax error for const without initialization
reference error for let without initialization
type error for reassigning const