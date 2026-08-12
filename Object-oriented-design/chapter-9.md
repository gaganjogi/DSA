Inheritance and composition have one significant difference in the way objects are built.When inheritance is used, the end result is, at least conceptually, a single class that incorporates all of
the behaviors and attributes of the inheritance hierarchy.When composition is used, one
or more classes are used to build another class.

Instead of saying that we have a large unit with a steering
wheel, four tires, an engine, and so on, we say that we have a car.This makes it easier for
us to communicate and keep things clear in our heads

Composition also helps in other ways, such as making parts interchangeable. If all steer-
ing wheels are the same, it does not matter which specific steering wheel is installed in a
specific car. In software development, interchangeable parts mean reuse

main thing they are saying is think in abstract and code should be resusable right

We need to build complex systems in simple manageable pieces

Four things in keep in mind in building phases:-
1. Stable complex systems usually take the form of a hierarchy, where each
system is built from simpler subsystems, and each subsystem is built from
simpler subsystems still.

2. Stable, complex systems are nearly decomposable.” complex system have fewer links between components than there internal connections

3. “Stable complex systems are almost always composed of only a few dif-
ferent kinds of subsystems, arranged in different combinations.”

4. Stable systems that work have almost always evolved from simple sys-
tems that worked.”

 CD player broke, you could disconnect the CD player and simply take it in for re-
pair. (Note that all the components are connected by patch cords.) 

 Composition is one of the primary strategies
that you, as a software designer, have in your arsenal to fight software complexity.

Third-party components
must come from a reliable source, and you must feel comfortable that the software is prop-
erly tested, not to mention that it must perform the advertised functions properly

Types of Composition
Generally, there are two types of composition: association and aggregation

 we consider inheritance and composition the two primary ways to build classes. Thus, in this book,
an association is a form of composition.

In an aggregation, you normally see only the whole, and in associations, you nor-
mally see the parts that make up the whole

Aggregation - complex object made up of many other complex and
simple objects

Association - present both the whole and the parts

the computer box needs the service of a mouse, but does not have
the capability to provide this service by itself.Thus, the computer box requests the service
from a separate mouse via the specific port and cable connecting the mouse to the box.

IMPORTANT:-
An aggregation is a complex object composed of other objects. An association is used when
one object wants another object to perform a service for it.

Similarly, in the stereo example, the relationship between the receiver, the speakers, and
the CD player is association; however, each of these components are complex objects that
are made up of other objects

Cardinality - number of objects that participate in an association and whether the participation is optional

Which objects collaborate with which other objects?
How many objects participate in each collaboration?
Is the collaboration optional or mandatory?

Employee class relation between these 

Cardinality of Class Associations
Division
JobDescription
Spouse
Child

division -  only 1 for one employee - mandatory
jobdescription - 1 to n for one employee - mandatory
spouse - 0 to 1 for one employee - optional
child - 0 to n for one employee - optional

Multiple Object Associations we represent using 

one-to-many relationship are represented by arrays in
the code:

private Spouse spouse;
private Child[] child;
private Division division;
private JobDescription[] jobDescriptions;

Optional Associations
One of the most important issues when dealing with associations is to make sure that your
application is designed to check for optional associations.This means that your code must
check to see whether the association is null.

if no spouse exists, the code must not attempt to invoke a spouse method.
This could lead to an application failure.Thus, the code must be able to process an
Employee object that has no spouse.

nheritance represents a new kind of al-
ready-existing object, composition represents the interactions between various objects.