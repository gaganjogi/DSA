Inheritance represents the is-a relationship that was introduced in Chapter 1,“Intro-
duction to Object-Oriented Concepts.” For example, a dog is a mammal.
Composition involves using other classes to build more complex classes—a sort of as-
assembly.There is no parent/child relationship in this case. Basically, complex objects are
composed of other objects.

Reuse was the name of the game,
and inheritance was the ultimate expression of reuse.

One of the primary rules of OO design is that public inheritance is represented by an is-a
relationship.

Testing New Code
In our example with the GoldenRetriever class, the bark and pant methods should be
written, tested, and debugged when the Dog class is written. Theoretically, this code is now
robust and ready to reuse in other situations. However, the fact that you do not need to
rewrite the code does not mean it should not be tested. However unlikely, there might be
some specific characteristic of a retriever that somehow breaks the code. The bottom line is
that you should always test new code. Each new inheritance relationship creates a new con-
text for using inherited methods. A complete testing strategy should take into account each
of these contexts.

You should immediately understand the problem.What do we do with a pen-
guin, or an ostrich? They are birds, yet they can’t fly.You could override the behavior lo-
cally, but the method would still be called fly.

We started with a single class, called
Dog, and we factored out some of the commonality between various breeds of dogs.This
concept, sometimes called generalization-specialization,

The idea is that as you make your way down the inheritance
tree, things get more specific.The most general case is at the top of the tree
The idea of inheritance is to go from the general to the specific by factoring out
commonality.

Obviously a computer model can only approximate real-world situations. Computers are good
at number crunching but are not as good at more abstract operations(judgment, for example).

The system model that includes
barking dogs and yodeling dogs works fine. However, suppose that you simply do not
breed any yodeling dogs—never have and never will. Perhaps you do not need to include
the complexity of differentiating between yodeling dogs and barking dogs

The primary goal is always to build a system that is flexible without adding so
much complexity that the system collapses under its own weight.

More factoring out = more accurate model, but more complexity.
Less factoring out = simpler system, but less accurate model.

if you're a breeder who never breeds yodeling dogs, splitting BarkingDog/YodelingDog apart just adds complexity for zero real benefit — you'd be better off not making that distinction, even though it's "less accurate" to reality.

Inheritance is about factoring out shared behavior as you move from specific → general, but the chapter is warning you not to over-apply this — only factor out a distinction if your system actually needs it, because every new class you add for the sake of "modeling reality more precisely" also adds complexity you now have to live with.

Composition

Whenever a particular object is composed of other objects, and those objects are included
as object fields, the new object is known as a compound, an aggregate, or a composite object

In this book, aggregations are represented in UML by lines with a diamond, such as an en-
gine as part of a car. Associations are represented by just the line (no diamond), such as a
standalone keyboard servicing a separate computer box.

that the line connecting the Car class to the SteeringWheel class has a diamond
shape on the Car side of the line.This signifies that a Car contains (has-a) SteeringWheel.

The "fine line" is finding the sweet spot: granular enough to be useful and expressive, but not so granular that the design collapses under its own complexity — the same core lesson as the inheritance section, just applied to a different design tool (composition instead of inheritance).

define encapsulation as “the process of packaging
your program, dividing each of its classes into two distinct parts: the interface and the im-
plementation.”This is the message that has been presented over and over again in this
book.

Inheritance is also considered one of
the three primary OO concepts. However, in one way, inheritance actually breaks encap-
sulation! 

How Inheritance Weakens Encapsulation
testing becomes harder. You can't just test Cabbie in isolation and assume all is well — you now also have to re-verify every subclass whenever Cabbie's implementation changes, because behavior might have silently changed for them too, even without editing their code at all.

In short: inheriting implementation (not just interface) from a superclass creates hidden coupling — a change meant to be "just an internal implementation detail" of the superclass can unexpectedly break subclasses down the hierarchy, which defeats the isolation/safety that encapsulation is supposed to provide.

If you then create a subclass of Cabbie called PartTimeCabbie, and PartTimeCabbie in-
herits the implementation from Cabbie, changing the implementation of Cabbie directly
affects the PartTimeCabbie class.

If the method giveDirections is changed in
Cabbie, it will have a direct impact on PartTimeCabbie and any other classes that might
later be subclasses of Cabbie. In this subtle way, changes to the implementation of Cabbie
are not necessarily encapsulated within the Cabbie class.

Inheritance couples subclasses to the superclass's implementation, not just its interface — so implementation changes that should be "invisible" (per encapsulation) can silently break subclasses, forcing you to retest the whole hierarchy instead of just the changed class.

 If X is truly a more specific version of Y (Square vs Rectangle) → use inheritance (extends)
If X merely contains or uses Y as one of its parts (Window vs Rectangle) → use composition (put Y as a field inside X)

In Shape's case specifically, yes — it's abstract because it lacks the concrete details needed to actually draw itself or compute its area. But that's the reason it makes sense to be abstract, not the technical definition of what makes a class abstract.

Many well-respected OO designers have stated that composition
should be used whenever possible, and inheritance should be used only when necessary