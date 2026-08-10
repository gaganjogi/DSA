Frameworks and Reuse: Designing with Interfaces and Abstract Classes

One way to create reusable code is to create frame-
works. In this chapter, we focus on using interfaces and abstract classes to create frame-
works and encourage reusable code.

A framework = standardization + reuse (a "plug-and-play" system).

Two big benefits of a framework:
For users — consistent look and feel means once you learn one app, you don't have to relearn everything for the next one.
For developers — you get to reuse code (and design) that's already written and tested, instead of building basic things like an "Open" dialog box from scratch every time.

A framework is a pre-built, standardized set of components and rules (documented via an API) that lets developers reuse tested code and gives users a consistent experience across different applications — instead of everyone reinventing basic things like menus, toolbars, and dialog boxes.

Contract:-
Two or more parties for the doing or not doing of something specified—an agreement en-
forceable by law.”
This is exactly what happens when a developer uses an API—with the project man-
ager, business owner or industry standard providing the enforcement.When using con-
tracts, the developer is required to comply with the rules defined in the framework

If Circle does indeed fail to implement a draw() method, Circle will be considered ab-
stract itself. Thus, yet another subclass must inherit from Circle and implement a draw()
method. This subclass would then become the concrete implementation of both Shape and
Circle.

The only methods that a subclass
must implement are the ones that the superclass declares as abstract.These abstract meth-
ods are the contract.

A contract is the broader concept — it's simply "a mechanism that forces a developer to comply with an API's rules." The chapter explicitly says there are two ways to implement a contract in Java/.NET:

Abstract classes 
Interfaces 

An abstract class is one mechanism for enforcing a contract — not the same thing as a contract itself.

An abstract class is a container that can hold a contract (its abstract methods) plus extra non-contract code (its concrete methods). The contract is only the abstract-method part.

Java/.NET restrict classes to single inheritance to avoid the complications of multiple inheritance — but this creates a problem when a class needs to satisfy more than one contract. Interfaces solve this: a class can implement as many interfaces as it needs, giving the flexibility of "multiple contracts" without the risks of true multiple inheritance.

In the code, notice that Nameable is not declared as a class, but as an interface. Because
of this, both methods, getName() and setName(), are considered abstract and there is no
implementation provided.An interface, unlike an abstract class, can provide no implemen-
tation at all.As a result, any class that implements an interface must provide the implemen-
tation for all methods. For example, in Java, a class inherits from an abstract class, whereas a
class implements an interface.

Sometimes inheritance is referred to as implementation inheritance, and interfaces are
called definition inheritance.


In a nutshell, Java and .NET build objects in three ways: inheritance, interfaces, and com-
position.
You should be familiar with the following concepts:
- Dog is a Mammal, so the relationship is inheritance.
- Dog implements Nameable, so the relationship is an interface.
- Dog has a Head, so the relationship is composition.

interface = shared behavior across otherwise unrelated classes;
 inheritance = shared identity/implementation across related classes.

Abstract class = shared identity + some shared code, for classes that truly belong together.
Interface = shared contract with zero code, for classes that have nothing in common except a behavior they all agree to support.

"Is-a" via inheritance means is-a-kind-of (identity-based).
"Is-a" via interface means is-a-thing-that-can (capability-based) — sometimes called a "can-do" relationship in design literature, to distinguish it from strict inheritance.

for example to get name of planet , car and dog name they may be one method in each class like getplanetname(),getdogname(),getcarname() so we can create an interface called Nameable with a method getName() and implement it in each class. this will remove the overhead right

"interface removes the need for type-specific method names/checks, by giving unrelated classes a common type (is-a Nameable) they can all be treated through uniformly."

whatever interface is provided the programmer should abide by it and implement the methods in the class.

System Plug-in-Points- we can prefere using interface

// BAD — coupled to a specific class
Dog myPet = new Dog();
myPet.bark();

// GOOD — coupled to the contract, not the concrete type
Nameable myPet = new Dog();
myPet.getName();

-----------------------------------------------------------------------------------------------------------------------------

Exactly — that's the rule. In the constructor (and fields, method parameters, return types — anywhere you're accepting or exposing a dependency), type it as the interface, not the concrete class. important thing to remember

wherever a class depends on another object (constructor params, fields, method params), type that dependency as the interface. The concrete class should only ever appear at the single point where the object is actually constructed (new ElectricEngine()), never in the type declarations that describe the dependency.

-----------------------------------------------------------------------------------------------------------------------------

how to create a workable framework using inheritance,abstract classes, interfaces and composition.

Although many systems must deal with legacy issues, fortunately for us, the pizza and donut applications are brand-new
systems.Thus, we can use a bit of foresight and design this system in a reusable manner. In
this way, we will not run into the maintenance nightmare just described.What we want to
do is factor out as much commonality as possible. In our design, we will focus on all the
common business functions that exist in a Web-based application. Instead of having multi-
ple application classes like testPizzaShop and testDonutShop, we can create a design
that has a class called Shop that all the applications will use

create an abstract class to factor out some of the implementa-
tion, and an interface (our familiar Nameable) to factor out some behavior.

Take reference of shop system we can check how inheritance abstract classes composition and interfaces work together
beauty it is

chapter discusses the primary topics of building objects: inheritance, interfaces, and composition. In this chapter, you have learned how to build reusable code by designing with contracts.