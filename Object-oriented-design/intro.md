main things why OO succeded is due to restriction in access of data and a real world entities
like objects have entities and behaviors
entities - data
behaviors - methods

encapsulation - restriction in access of data
and also it will hide the implementation details

object-data is part of the package—it is
not separated from the code.

the getters and setters are actually properties of the attributes

Employee
–socialSecurityNumber:String
–gender:boolean
–dateOfBirth:Date
+getSocialSecurityNumber:String
+getGender:boolean
+getDateOfBirth:Date
+setSocialSecurityNumber:void
+setGender:void
+setDateOfBirth:void
Payroll
–pay:double
+calculatePay:double


you can think of objects as being
wholly independent and having their own attributes and methods.

In a database table, the definition of the table itself (fields, description, and data
types used) would be a class (metadata), and the objects would be the rows of the table
(data).

A class can be thought of as a sort of higher-level data type

you must design a class before you can create an
object.

Encapsulation is defined by the fact that objects contain both the attributes and behav-
iors. Data hiding is a major part of encapsulation.

The interface should completely describe how
users of the class interact with the class.

If you control the access to the attribute, when a problem arises, you do
not have to worry about tracking down every piece of code that might have changed the
attribute—it can only be changed in one place (the setter)

The toaster requires electricity.To get this electricity, the cord from the
toaster must be plugged into the electrical outlet, which is the interface

details that are not pertinent to the use of the object are
hidden from other objects.

The superclass, or parent class, contains all the attributes and behaviors that are common
to classes that inherit from it. 

The Mammal class is considered the superclass of
the Dog and the Cat subclasses, or child classes.

in encapsulation attribute will be hidden
but in inheritance attribute will be visible so not to repeat the code in subclasses


The power of inheritance lies in its abstraction and organization techniques.


When you tell somebody to draw a
shape, the first question asked is,“What shape?” No one can draw a shape, as it is an ab-
stract concept (in fact, the Draw() method in the Shape code following contains no imple-
mentation).You must specify a concrete shape.


Overriding basically means replacing an im-
plementation of a parent with one from a child.

When a method is defined as abstract, a subclass must provide the implementation for this method

When a method name is the same as the class and no return
type is provided, the method is a special method, called a constructor. 


Constructor is a good
place to perform initializations and start-up tasks.