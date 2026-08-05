Anatomy of a Class

part to emphasize that the interface is the primary part of the initial design.

Name of the class should be descriptive and should reflect the responsibility of the class.

Attributes represent the state of the object because they store the information about the
object

Hiding as Much Data as Possible
All the attributes in this example are private. This is in keeping with the design principle of
keeping the interface design as minimal as possible. The only way to access these attrib-
utes is through the method interfaces provided (which we explore later in this chapter).

Passing a Reference
It is likely that the Cab object was created by another object. Thus, the object reference
would be passed to the Cabbie object. However, for the sake of this example, the Cab is
created within the Cabbie object. Likewise, for the purposes of this example, we are not re-
ally interested in the internals of the Cab object.

Note that at this point, only a reference to a Cab object is created; there is no memory al-
located by this definition.

The rule is that the default
constructor is only provided if you provide no constructors in your code.

but setting an attribute to nothing is a useful programming
technique

mainly in constructor if any referenced object is there we can create object in the constructor itself
mycab=new Cab(serialNumber)
As a result of executing this line of code, the storage for a Cab object is allocated.

This makes sense be-
cause in this case, the constructors are obvious members of the class interface. If the con-
structors were private, other objects couldn’t access them—objects that want to instantiate
a Cab object.

A class cannot be like an island

sn’t it necessary to inspect and sometimes change another class’s attrib-
ute? The answer is yes, of course.There are times when an object needs to access another
object’s attributes; however, it does not need to do it directly.

A class should be very protective of its attributes. For example, you do not want object
A to have the capability to inspect or change the attributes of object B without object B
having control.There are several reasons for this; the most important reasons really boil
down to data integrity and efficient debugging.

Sometimes accessors are
referred to as getters and setters, and sometimes they’re simply called get() and set(). By
convention, in this book we name the methods with the set and get prefixes,

here is that the Supervisor object can’t
simply retrieve the information on its own; it must ask the Cabbie object for the infor-
mation

If the age is less than 0, the setAge() method can refuse to set this incorrect value. In general, the
setters are used to ensure a level of data integrity.


This is also an issue of security.You may have sensitive data, like passwords or payroll
information that you want to control access to.Thus, accessing data via getters and setters
provides the ability to use mechanisms like password checks and other validation tech-
niques.This greatly increases the integrity of the data

The physical reality (what actually happens in memory)

Attributes (data) ARE separate per object — cabbie1.name and cabbie2.name are genuinely different memory locations, holding different values. That part matches the conceptual picture.

But methods are NOT duplicated per object. There is only one single copy of setName() in memory, shared by every Cabbie object that ever exists. When cabbie1.setName("Raj") runs, the engine executes that one shared method code, just temporarily pointed at cabbie1's data (that's literally what this does — it tells the shared method "operate on this particular object's attributes right now").

Method code (ONE shared copy in memory):
  setName(iName) { this.name = iName; }
        ↑                    ↑
        |                    |
   cabbie1.setName("Raj")   cabbie2.setName("Amit")
   (this = cabbie1)          (this = cabbie2)

Attributes (SEPARATE per object):
  cabbie1: { name: "Raj" }
  cabbie2: { name: "Amit" } 

  That is the reason this keyword is used to refer to the current object.

  attributes are genuinely separate per object (that's what makes each object unique), but methods are shared, single copies of code reused by every instance — you can keep thinking of objects as "fully independent" for design purposes, because this memory-sharing detail is invisible and irrelevant to how you actually write and structure OOP code.

  non-static methods==static variable defined

  If an attribute is static, and the class provides a setter for that attribute, any object that invokes the setter will change the single copy. Thus, the value for the attribute will change for
all objects.

"Non-static methods behave like static members in terms of memory — only one copy exists for the entire class, shared by all objects."

public interface methods tend to be very abstract, and the im-
plementation tends to be more concrete

Some methods in a class may be hidden
from other classes.These methods are declared as private:

The point here is that private methods are strictly part of the implementation and are
not accessible by other classes.

public void giveDestination() {   // ← ABSTRACT — just says "give a destination," nothing more
}

private void turnRight() {        // ← CONCRETE — a specific, low-level action
}

private void turnLeft() {         // ← CONCRETE — another specific, low-level action
}

Public methods should read like a simple, general request ("what to do"); private methods contain the messy, specific, real steps ("how it's actually done") — and good class design means the abstract, public side never leaks the concrete, implementation-level details.