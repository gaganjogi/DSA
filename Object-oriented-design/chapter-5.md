Class Design Guidelines

The elegance of this mindset is that classes literally model real-world objects and
how these objects interact with other real-world objects

Rather than using a structured, or top-
down, approach, where data and behavior are logically separate entities, the OO approach
encapsulates the data and behavior into objects that interact with each other

Notice: no instance fields. Every method takes all the data it needs as parameters, does something, and returns a result. Nothing is stored in the object. You could call add() a thousand times and the object's internal state (which doesn't exist) never changes.

"put related functions in the same file." It's the bundling of data + the behavior that operates on that data,

State + behavior travel together.

“the interface of a well-designed object describes the services that the client wants accomplished.” If a class does not provide a useful service to a user, it should not have been built in the first place.

The Minimum Public Interface

Extending the Interface
Even if the public interface of a class is insufficient for a certain application, object technol-
ogy easily allows the capability to extend and adapt this interface by means of inheritance.
In short, if designed with inheritance in mind, a new class can inherit from an existing class
and create a new class with an extended interface.

Hiding the Implementation

In the cabbie example, the Cabbie class might contain behavior pertaining to how it
eats breakfast. However, the cabbie’s supervisor does not need to know what the cabbie has
for breakfast
all fields shall be private.” In
this way, none of the fields in a class is accessible from other objects.

Designing Robust Constructors (and Perhaps
Destructors)

First and foremost, a constructor should put an object into an initial, safe state.This in-
cludes issues such as attribute initialization and memory management
that the object acquired
during its existence. If this function is ignored, a memory leak will result.

Designing Error Handling into a Class

The rule of thumb is that the application should never crash.When an error is encoun-
tered, the system should either fix itself and continue, or exit gracefully without losing any
data that’s important to the user.

Documenting a Class and Using Comments
At the class level, the scope
might be small enough that a developer can get away with shoddy documentation. How-
ever, when the class gets passed to someone else to extend and/or maintain, or it becomes
part of a larger system (which is what should happen), a lack of proper documentation and
comments can be lethal.


In most cases, there is
no reason to build a class if it is not going to interact with other classes.
When designing a class, make sure you are aware of how other objects will interact
with it.

have reuse and extensibility in mind
To make a class usable in various systems, the class must be designed
with reuse in mind.

Making Names Descriptive
Making names descriptive is a good development practice that transcends the various de-
velopment paradigms.

Abstracting Out Nonportable Code
if you are writing code to access
a serial port of particular hardware, you should create a wrapper class to deal with it.Your
class should then send a message to the wrapper class to get the information or services it
needs. Do not put the system-dependent code into your primary class


Providing a Way to Copy and Compare Objects

Keeping the Scope as Small as Possible
Scope and Global Data
Minimizing the scope of global variables is a good programming style and is not specific to
OO programming. Global variables are allowed in structured development, yet they can get
dicey. In fact, there really is no global data in OO development. Static attributes and meth-
ods are shared among objects of the same class; however, they are not available to objects
not of the class.
This is what is meant by keeping the scope as small as possible.

A Class Should Be Responsible for Itself

By using polymorphism and grouping the Circle into
a Shape category, Shape figures out that it is a Circle and knows how to print itself

design a class with extensibility in mind, you should also design with future maintenance
in mind.
One of the best ways to promote maintainability is
to reduce interdependent code—that is, changes in one class have no impact or minimal
impact on other classes.

Highly Coupled Classes
Classes that are highly dependent on one another are considered highly coupled. Thus, if a
change made to one class forces a change to another class, these two classes are consid-
ered highly coupled. Classes that have no such dependencies have a very low degree of cou-
pling. 

If the classes are designed properly in the first place, any changes to the system should only
be made to the implementation of an object. Changes to the public interface should be
avoided at all costs.

To enable maintainability, you should also design your classes to be as independent as possible.To promote a high level of maintainability, keep the coupling level of your classes as low as possible.

A good testing plan
quickly uncovers any areas where insufficient interfaces are provided. In this way, the
process can iterate until the class has the appropriate interfaces

You just need something that responds to the same method calls and returns plausible values. That's a stub.

"A stub is a minimal, fake implementation of an interface that returns plausible canned data instead of doing real work. It lets you validate that the interface's design is usable and correct from the caller's perspective before the real (often expensive or not-yet-ready) implementation exists. Later, you swap the stub for the real implementation without changing any calling code, because both honor the same interface."


Using Object Persistence
Persistence is the concept of maintaining the state of an object

 Flat file system—You can store an object in a flat file by serializing the object.This
has very limited use.

 Relational database—Some sort of middleware is necessary to convert an object to
a relational model.

 OO database—This is the logical way to make objects persistent, but most 
companies have all their data in legacy systems and are just starting to explore object data-
bases. Even brand-new OO applications must usually interface with legacy data.

Serializing an object means converting it to a stream of bytes that can be stored in a file or database. When the object is needed again, it can be deserialized (converted back to its original form) from the byte stream.

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toJSON() {
        return { name: this.name, age: this.age };
    }

    static fromJSON(json) {
        const obj = JSON.parse(json);
        return new User(obj.name, obj.age);
    }
}

const user = new User("Alice", 30);
const serialized = JSON.stringify(user);       // uses toJSON() automatically
const restored = User.fromJSON(serialized);    // real User instance again

console.log(restored instanceof User); // true

Serializing = flattening an object into a portable format (e.g., JSON.stringify). Marshaling = sending that flattened data somewhere (file, network). Deserializing = rebuilding it on the other end (JSON.parse). Both sides must agree on the format, and in JS you often need custom logic to restore full class behavior, not just raw data


To keep in mind
So: not something to obsess over for every class, but definitely something worth a quick check for any class that represents "an entity/data that crosses a boundary" — file, network, database, cache, another service


class Order {
    constructor(id, customer, items) {
        this.id = id;
        this.customer = customer;   // this is itself an object!
        this.items = items;         // this is an array of objects!
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const order = new Order(
    1,
    new Customer("Alice", "alice@email.com"),
    [{ product: "Book", qty: 2 }, { product: "Pen", qty: 5 }]
);

// Manual "middleware" — flattening the object into relational rows
function saveOrder(order) {
    db.query(
        `INSERT INTO customers (id, name, email) VALUES (?, ?, ?)`,
        [101, order.customer.name, order.customer.email]
    );

    db.query(
        `INSERT INTO orders (id, customer_id) VALUES (?, ?)`,
        [order.id, 101]
    );

    order.items.forEach(item => {
        db.query(
            `INSERT INTO order_items (order_id, product, qty) VALUES (?, ?, ?)`,
            [order.id, item.product, item.qty]
        );
    });
}