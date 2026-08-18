The level of reuse increases when you move from classes to patterns and finally frameworks. So it's not just a spectrum of size/abstraction — it's a spectrum of how much reuse leverage you get. A class gives you a little reuse. A pattern gives you more (a whole proven relationship-shape you can drop into any design). A framework gives you the most (an entire working skeleton of a solution).

Liskov substituion principle:-
Extend a class by adding new stuff, not by changing how the old stuff already works.

Dependency Inversion Principle:-
High-level modules should not depend on low-level modules. Both should depend on abstractions.
Abstractions should not depend on details. Details should depend on abstractions.

Don't let your important logic get tied to specific tools — make everyone talk through a shared interface instead.

Now the low-level classes (FileReportSource, DatabaseReportSource) are the ones that depend on the abstraction (ReportSource), not the other way around

The dependency arrow is now: low-level → abstraction ← high-level. This is the "inversion" — both sides depend on the interface, and importantly, the low-level detail classes are the ones bending to fit the business-defined contract, not vice versa.

Define the interface in the language your business logic wants to speak — then make the low-level details conform to it, not the other way around.

Low level classes are dependent on high level abstractions