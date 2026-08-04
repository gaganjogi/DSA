constructors are methods that share the same name as the class and have no return type

Thus, the code new Cabbie() will instantiate a Cabbie object and call the Cabbie
method, which is the constructor.

Code included inside a constructor should
set the newly created object to its initial, stable, safe state.

Initializing attributes is a common function performed within a constructor.

constructor is to initialize the memory allocated
when the new keyword is encountered

It is important to understand that at least one constructor always exists, regardless of whether you write a constructor yourself.

Besides the creation of the object itself, the only action that a default constructor takes
is to call the constructor of its superclass (if it inherits from a parent class).

If there are attributes in the class, it is always good practice to initialize
them.

we might want to pass an initialization parameter that allows count
to be set to various numbers.(Overloading Methods)

Overloading allows a programmer to use the same method name over and over, as long as
the signature of the method is different each time.The signature consists of the method
name and a parameter list

the signature may or may not include the return type. In Java
and C#, the return type is not part of the signature. For example, the following methods
would conflict even though the return types are different:
public void getCab (String cabbieName);
public int getCab (String cabbieName);

Although the diagram shows the two constructors, without
the parameter list, there is no way to know which constructor is which

No Return Type
Notice that in this class diagram the constructors do not have a return type. All other meth-
ods besides constructors must have return types.

(When having inherited parent class) first initilaise the parent instance variables and then child instance variables
The first thing that happens inside the constructor is that the constructor of the
class’s superclass is called. If there is no explicit call to the superclass constructor, the
default is called automatically; however, you can see the code in the bytecodes.

Then each class attribute of the object is initialized.These are the attributes that are
part of the class definition (instance variables), not the attributes inside the construc-
tor or any other method (local variables). In the DataBaseReader code presented
earlier, the integer startPosition is an instance variable of the class.

Then the rest of the code in the constructor executes.

If the attribute is first set in the code, make sure that you initialize the
attribute to some valid condition—for example, set an integer to zero.

Initializing to some safe state not always zero

During the design, it is good practice to identify a stable state for all attributes and
then initialize them to this stable state in the constructor.

Error handling

Ignore the problem
The primary directive for all applications is that the application
should never crash.If you do not handle your errors, the application will eventually termi-
nate ungracefully or continue in a mode that can be considered an unstable state

Checking for the problem and aborting application
the application can display a message indicating that there is a problem. In this
case the application gracefully exits, and the user is left staring at the computer screen

Checking the problem and attempting it to recover
In this case, the problem is detected by the code, and the application attempts to fix itself.This works well in
certain situations. 


A Mix of Error Handling Techniques
Despite the fact that this type of error handling is not necessarily object-oriented in nature, I
believe that it has a valid place in OO design. Throwing an exception can be expensive in terms of overhead. Thus, although exceptions are a great design choice, you will still want to consider other error handling techniques, depending on your design and performance needs.

Throwing an exception
Exceptions provide a way to detect
problems and then handle them.

try {
    // code that might throw an exception
}
catch (Exception e) {
    // code to handle the exception
}

System Throws
Exception

Application Catches
and Handles
Exception

System is
Happy

The content of scope

A Shared Method
A constructor is a good example of a method that is shared by all instances of a class.
There are three types of attributes:
- Local attributes
- Object attributes
- Class attributes

Local attributes
Local variables are not shared by methods. (confined to that methods definition)

Object attributes
There are many design situations in which an attribute must be shared by several methods
within the same object

The selection of the word this as a keyword is perhaps unfortunate. However, we
must live with it.The use of the this keyword directs the compiler to access the object
variable count and not the local variables within the method bodies.


it's not illegal, but it's a readability/bug-risk issue — keep local variable names distinct from class field names so it's always immediately obvious, just by reading, whether you're touching the object's real state or just a throwaway value

Class attributes
use static keyword before defining the variable (By declaring count as static, this attribute is allocated a single piece of memory for all objects instantiated from the class.)

problem:-

let object_one=new Count()
let object_two=new Count()
For the sake of argument, let’s say that the object object_one is going merrily about its
way and is using count as a means to keep track of the pixels on a computer screen.This
is not a problem until the object object_two decides to use attribute count to keep track of
sheep.The instant that object_two records its first sheep, the data that object_one was saving is
lost.

operator overloading and multiple inheritance simply created overhoad not supported in JS/TS

The bottom line is that Java and .NET inter-
faces provide interfaces, but no implementation, whereas abstract classes may provide both
interfaces and implementation.

Shallow copy (copies only address) spread operator shallow copy

use structuredClone(for deep copy)
 let bag1 = { items: ["pen", "book"] };
let bag2=structuredClone(bag1)

Object equality check
let object_one={items:['bag','pen']}
let object_two={items:['bag','pen']}

function isContentEqual(obj1,obj2){
    return obj1.items.length===obj2.items.length && 
    obj1.items.every((val,i)=>val===obj2.items[i])
}
console.log(isContentEqual(object_one,object_two))