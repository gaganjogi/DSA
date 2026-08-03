The fundamental unit of OO design is the class.The desired
end result of OO design is a robust and functional object model—in other words, a com-
plete system.

Thus, before you start to design a system, or even a class, think the problem through
and have some fun

When moving to an OO language, you must go
through the investment of learning OO concepts and the corresponding thought process
first. 

If this paradigm shift does not take place, one of two things will happen: Either the
project will not truly be OO in nature (for example, it will use C++ without using OO
constructs), or the project will be a complete object-disoriented mess


Properly constructed classes are designed in two parts—the interface and the implementa-
tion.

the interface to a class should contain only
what the user(designers and developers) needs to know.

Identifying the User (important)
Perhaps the most important consideration when designing a class is identifying the audi-
ence, or users, of the class.

The bottom line
is that both the user and the implementation must conform to the interface specification.

Database reader class to get users orders everything only think of interfaces input and what output we obtain in future if they change from postgres to mysql or mongoDB changes inside databasereader class only changes

Minimal Interface
Although perhaps extreme, one way to determine the minimalist interface is to initially pro-
vide the user no public interfaces. Of course, the class will be useless; however, this forces
the user to come back to you and say, “Hey, I need this functionality.” Then you can negoti-
ate. Thus, you add interfaces only when it is requested. Never assume that the user needs
something.

These are nothing but a wrappers only right

A well-built abstraction layer (middleware/wrapper) lets you get both — your application code stays clean and object-oriented, while the underlying storage stays relational, because that abstraction layer hides the mismatch from the rest of your app.

Instead of storing data in tables/rows/columns, an OO database stores actual objects — with their attributes, methods references, and relationships (inheritance, composition)


first:- convert RDB to OO 
second:- use middleware to get them from RDB or mongo db
Example:-
SELECT * FROM users WHERE id = 5;

// pseudocode, not real API
const user = db.retrieve(User, id === 5);

Object Persistence
Object persistence refers to the concept of saving the state of an object so that it can be re-
stored and used at a later time. An object that does not persist basically dies when it goes
out of scope. For example, the state of an object can be saved in a database.

relational-to-object mapping (the middleware/wrapper idea) bridges the two

JS/TS is dynamically loaded/interpreted, so adding a new class/module and importing it somewhere doesn't require "recompiling" the rest of your app in the C++ sense.

However,
simply stating that a highly abstract interface is more useful than a highly concrete inter-
face, although often true, is not always the case.

So our goal
is to design abstract, highly reusable classes—and to do this we will design highly abstract
user interface

think in such a way the like abstarct and reusable
 “Take me to the airport” is
generally the way to go for a good, reusable OO design whose implementation would be
different in Chicago, New York, or Cleveland.

Public interfaces define what the users can access. If you initially hide the entire
class from the user by making the interfaces private, when programmers start using
the class, you will be forced to make certain methods public—these methods thus
become the public interface.


One-line takeaway: when designing a class's public methods, always ask "how would someone naturally want to use this, thinking about their problem — not how would it be easiest for me to implement it."

A good interface has to be usable and realistic for everyone who interacts with the system, not just the person who feels like the "main" user.(taxi example)

"who or what sends messages to this object, from every side of the interaction — not just the most obvious one?" — that's how you avoid designing a system that only makes sense from a single, narrow point of view.

With all the information gathered about the users, the object behaviors, and the environ-
ment, you need to determine the public interfaces for each user object.

The code within public methods
is actually a part of the implementation because the user cannot see it. (The user should
only see the calling structure of an interface—not the code inside it.)

Interface is actually users see the object leave implementation part to that object

Conclusion:-

Mainly know difference btwn interface and implementation part 
public interface
minimal interface- start with no interface and then try to add based on the actors/users
use abstract thinking when desgining interfaces
give minimal interface possible
think users and both who are calling and how are implementating also