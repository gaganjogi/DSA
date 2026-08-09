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