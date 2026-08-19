Instead of using new SomeClass() directly scattered all over your code, you put the object-creation logic inside a method — usually called something like createProduct() or factoryMethod() — defined in a superclass (or interface).

// Product interface
class Transport {
  deliver() { throw new Error("not implemented"); }
}

concreate products

class Truck extends Transport {
  deliver() { console.log("Delivering by road in a truck"); }
}

class Ship extends Transport {
  deliver() { console.log("Delivering by sea in a ship"); }
}

// Creator (superclass) — has the "factory method"
class Logistics {
  createTransport() { /// factory method
    throw new Error("Subclasses must implement this");
  }

  planDelivery() {
    const transport = this.createTransport(); // doesn't know which class! or we would have done like this new Truck at first as it was having only truck
    transport.deliver();
  }
}

// Concrete creators — each decides WHICH class gets created
class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}

// The superclass decides how an object gets used; the subclass decides which object gets made.


There’s a slight limitation though: subclasses may return dif-
ferenttypesofproductsonlyiftheseproductshaveacommon
base class or interface


Steps:-
Product declares an interface


Factory Method lets you add new product types by adding new classes, never by editing old ones.

Factory Method is the "hook" a library leaves open so users can swap its internal parts by subclassing — without editing the library's own code.

Factory Method splits 'how do I build this object' (construction, in the factory method) from 'what do I do with this object once I have it' 

main thing indentify

identify product -> implement that concreate method - > in create class write abstract method for that -> implement that abstract method in concreate class