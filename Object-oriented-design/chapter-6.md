OOP is a tool, not a guarantee — good design still takes deliberate work, and now we're zooming out from single classes to how classes work together as a system.

Generally, a solid OO design process will generally include the following steps:
1. Doing the proper analysis
2. Developing a statement of work that describes the system
3. Gathering the requirements from this statement of work
4. Developing a prototype for the user interface
5. Identifying the classes
6. Determining the responsibilities of each class
7. Determining how the various classes interact with each other
8. Creating a high-level model that describes the system to be built

The Ongoing Design Process
Despite the best intentions and planning, in all but the most trivial cases, the design is an
ongoing process. Even after a product is in testing, design changes will pop up. It is up to
the project manager to draw the line that says when to stop changing a product and adding
features.

Developing a Statement of Work
The statement of work (SOW) is a document that describes the system.The SOW should give anyone who reads it a complete
understanding of the system. Regardless of how it is written, the SOW must represent the
complete system and be clear about how the system will look and feel.Many customers
create a request-for proposal (RFP) for distribution, which is similar to the statement of
work

Gathering the Requirements
The requirements document describes what the users want the system to do. It must also be of
specific detail for a design group to use the document to proceed with the design phase
summary statement or presented as bulleted items.
Each individual bulleted item represents one specific requirement of the system.The re-
quirements are distilled from the statement of work

Developing a Prototype of the User Interface
One of the best ways to make sure users and developers understand the system is to create
a prototype.Most prototypes are created with an integrated development environment (IDE). How-
ever, drawing the screens on a whiteboard or even on paper might be all that is needed.The look and feel of the user interface are the major concerns at this point. Having a good prototype can help immensely when identifying
classes.

Identifying the Classes
After the requirements are documented, the process of identifying classes can begin. From
the requirements, one straightforward way of identifying classes is to highlight all the
nouns(names a person, place, thing, or idea).You might end up eliminating classes,
adding classes, and changing classes at various stages throughout the design. It is important
to get something down first.Take advantage of the fact that the design is an iterative
process.

Determining the Responsibilities of Each Class
You need to determine the responsibilities of each class you have identified.This includes
the data that the class must store and what operations the class must perform.

Determining How the Classes Collaborate with Each Other
Most classes do not exist in isolation.Although a class must fulfill certain responsibilities,
many times it will have to interact with another class to get something it wants.One class can send a message to another class
when it needs information from that class, or if it wants the other class to do something for it.

Creating a Class Model to Describe the System
When all the classes are determined and the class responsibilities and collaborations are
listed, a class model that represents the complete system can be constructed.The class
model shows how the various classes interact within the system.
In this book, we are using UML to model the system. Several tools on the market use
UML and provide a good environment for creating and maintaining UML class models.

Case study for understanding the process

Because this is a small system, a requirements summary
statement might make more sense. However, in most large systems, a database of the re-
requirements (in bulleted list format) would be more appropriate.

Using CRC Cards
Discovering classes is not always straightforward. There mustbe a way to keep track of the classes as well as their interactions. One of the most popular methods for identifying and categorizing classes is to use class-responsibility-collaboration
cards (CRC).Each CRC card represents a single class’s data attributes, responsibilities, and
collaborations.

CRC cards are, quite literally, a collection of standard index cards.
You need to create three sections on each card:
- The name of the class
- The responsibilities of the class
- The collaborations of the class

Thus, using the index cards to discover classes (even a computerized
CRC system) is a technique that everyone can understand.There are certainly various
ways to perform these tasks, and many developers will use techniques that they are com-
fortable with

To identify collaboration

To help discover collaborations, use-case scenarios can be used.A use-case is a trans-
action or sequence of related operations that the system performs in response to a
user request or event.
n For each use-case, identify the objects and the messages that it exchanges.

CRC cards help you discover classes, whereas use-case scenarios help you discover collaborations.

Responsibility = something the class knows (data) or does on its own (an action it performs internally)
Collaboration = another class it needs to talk to in order to fulfill that responsibility

Step 1: Customer → Cart        : "add item to cart"
Step 2: Customer → Order       : "place order"
Step 3: Order → Payment        : "process payment"
Step 4: Order → Restaurant     : "notify, order received"
Step 5: Order → Delivery       : "create delivery" (order_id passed)
Step 6: Delivery → DeliveryPerson : "assign delivery"
Step 7: DeliveryPerson → Customer : "deliver to address"