Pattern - a pattern is a reusable solution template, not a one-size-fits-all blueprint — you apply the same underlying idea differently each time depending on context.

Four elements of pattern:-
Pattern name — A short, memorable label (like "Observer" or "Singleton"). This matters because it builds a shared vocabulary — instead of describing a whole design problem/solution from scratch, you can just say "use a Factory here" and other engineers instantly know what you mean.

Problem — Describes when to use the pattern: what situation, what symptoms in your design (e.g., rigid class structures) signal that this pattern applies, and any preconditions.

Solution — Describes the general structure (classes/objects, their relationships and responsibilities) that solves the problem. Importantly, this is abstract — a pattern isn't literal code you copy-paste, it's a template you adapt to your specific situation.

Consequences — The tradeoffs of using the pattern: what you gain and what you give up (e.g., effects on flexibility, performance, portability). This is included because no design choice is free, and understanding costs/benefits helps you decide whether the pattern is worth applying in your case.

MVC splits a user interface into three separate pieces instead of jumbling everything into one object:

Model — the actual application data/logic (e.g., a list of phone numbers)
View — how that data is displayed on screen (e.g., a listbox showing the numbers)
Controller — the glue that handles user input and connects the View to the Model (e.g., what happens when you click or type)

You can redesign the look of your UI (View) without touching the business logic (Model) or how the input is handled (Controller).
You can change how a value is calculated (business logic) without touching the UI.
You can swap out how/where data is stored without affecting the UI or logic.

Divided the patterns into three categories:

Creational patterns create objects for you, rather than having you instantiate objects
directly.This gives your program more flexibility in deciding which objects need to
be created for a given case.

Structural patterns help you compose groups of objects into larger structures, such as
complex user interfaces, or accounting data.

Behavioral patterns help you define the communication between objects in your sys-
tem and how the flow is controlled in a complex program.


Creational Patterns
The creational patterns consist of the following categories:
- Abstract factory
- Builder
- Factory method
- Prototype
- Singleton

SingleTon design pattern:-
If you have a website
that has a counter object to keep track of the hits on your site, you certainly do not want
a new counter to be instantiated each time your web page is actually hit.You want a
counter object instantiated when the first hit is made

Taking Care of Business
Remember, one of the most important OO rules is that an object should take care of itself.
This means that issues regarding the life cycle of a class should be handled in the class,
not delegated to language constructs like static, and so on.

The main point to note about the code is the regulation of the object creation. Only a
single counter object can be created.The code for this is as follows:
<!-- ```java

private int counter;
private static Counter instance = null;

public static Counter getInstance() {
if(instance == null) {
instance = new Counter ();
System.out.println("New instance created\n");
}
return instance;
}
}
```  -->

Structural Patterns
Structural patterns are used to create larger structures from groups of objects.The follow-
ing seven design patterns are members of the structural category:
- Adapter
- Bridge
- Composite
- Decorator
- Façade
- Flyweight
- Proxy