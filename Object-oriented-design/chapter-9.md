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