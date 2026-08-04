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