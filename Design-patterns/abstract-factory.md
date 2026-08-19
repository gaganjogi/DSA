Factory Method: one creation method, for one product (createTransport() → Transport).
Abstract Factory: an object with multiple creation methods, one per product type (createChair(), createSofa()), and each concrete factory guarantees the whole set belongs to the same family.

Code example:-
// --- Abstract Products (one interface per product TYPE) ---
class Chair {
  sitOn() { throw new Error("not implemented"); }
}

class Sofa {
  lieOn() { throw new Error("not implemented"); }
}

// --- Concrete Products, grouped by FAMILY ---
class ModernChair extends Chair {
  sitOn() { console.log("Sitting on a sleek modern chair"); }
}
class ModernSofa extends Sofa {
  lieOn() { console.log("Lying on a minimalist modern sofa"); }
}

class VictorianChair extends Chair {
  sitOn() { console.log("Sitting on an ornate Victorian chair"); }
}
class VictorianSofa extends Sofa {
  lieOn() { console.log("Lying on a plush Victorian sofa"); }
}

interface FurnitureFactory {
  createChair(): Chair;   // returns the ABSTRACT type, not ModernChair
  createSofa(): Sofa;
}

// --- Abstract Factory (declares creation methods for EACH product type) ---
class FurnitureFactory {
  createChair() { throw new Error("not implemented"); }
  createSofa() { throw new Error("not implemented"); }
}

// --- Concrete Factories (one per family, guarantees matching products) ---
class ModernFurnitureFactory extends FurnitureFactory {
  createChair() { return new ModernChair(); }
  createSofa() { return new ModernSofa(); }
}

class VictorianFurnitureFactory extends FurnitureFactory {
  createChair() { return new VictorianChair(); }
  createSofa() { return new VictorianSofa(); }
}
function furnishRoom(factory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  chair.sitOn();
  sofa.lieOn();
}

furnishRoom(new ModernFurnitureFactory());
// "Sitting on a sleek modern chair"
// "Lying on a minimalist modern sofa"

furnishRoom(new VictorianFurnitureFactory());
// "Sitting on an ornate Victorian chair"
// "Lying on a plush Victorian sofa"

main thing:-

identify the abstract products interface-> identify the concrete products-> identify the abstract factory interface-> identify the concrete factories




The factory can build a specific class internally, but it must "hand it over" to the client wearing the abstract interface's badge — so the client only ever knows "I have a Chair," never "I have a ModernChair."