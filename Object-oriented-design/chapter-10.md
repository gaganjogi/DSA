UML is nothing but object-modeling
UML is "a graphical language for visualizing, specifying, constructing and documenting the artifacts of a software-intensive system"

+ public
- private
# protected

for attributes in class diagram we specify there type name:String

for methods we define the return type getName:String

Commas separate the parameters in the parameter list.
+getCompanyName(parameter1, parameter2, parameter3):String

The notation is straightforward, and when the line with the arrowhead is encountered, an
inheritance relationship is indicated. (->)

An interface is also represented by a line with an arrowhead—but the arrowhead is connected
to a dashed line. (--->)

Composition is used when classes are built with other classes.
This can happen with aggregation when a class is actually a component of another class (as a tire is
to a car). Or it can happen with association when a class needs the services of another class
(for example, when a client needs the services of a server).

An aggregation is represented by a line with a diamond(below main class) at the head.

a client/server relationship fits this model.Although it is obvious
that a client is not part of a server, and likewise a server is not part of a client, they both
depend on each other

Association - In UML notation, a plain line represents this service, with no shape on either end

Cardinality only applies to association, not aggregation. 

Limited Cardinality Values
If we know that there are slots for six RAM chips, the upper limit number is not unlimited.
Thus, the n would be replaced by a 6, and the cardinality would be 1...6.

In aggregation, the parts are hidden inside the whole — you don't ask "how many engines does a car have, and is it optional?" from the outside, because you don't interact with Engine as a separate, countable thing in the first place. The whole (Car) is what the rest of the system sees, not its internal part count.

So: cardinality (1, 0–1, 1–n, 0–n) is a concept that belongs to association, because it's describing the relationship between the whole and individually addressable parts — exactly the kind of relationship association represents.

Keeping History
You must also consider that an employee can have job descriptions for past jobs, as well as
for current jobs. In this case, there needs to be a way to differentiate current job descrip-
tions from past ones. This could be implemented using inheritance by creating a collection
of job objects with an attribute indicating which job is currently active.