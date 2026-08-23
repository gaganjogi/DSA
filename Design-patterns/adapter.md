Adapter is a structural design pattern that allows objects with
incompatible interfaces tocollaborate.

In this we mainly follow object adapter

client - having existing business logic
client interface 
service- with which client need to talk but it is not possible directly
adapter- implements client interface and calls service it implements the client interface ,whilewrap-
ping the service object.


class RoundHole {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg): boolean {
    return this.getRadius() >= peg.getRadius();
  }
}

class RoundPeg {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}

class SquarePeg {
  constructor(private width: number) {}

  getWidth(): number {
    return this.width;
  }
}

class SquarePegAdapter extends RoundPeg {
  constructor(private peg: SquarePeg) {
    super(0); // dummy value, since real radius is computed dynamically below
  }

  getRadius(): number {
    // Pretend to be a round peg — compute the radius of the smallest
    // circle that could fit around the square peg
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}


SquarePegAdapter is-a RoundPeg (via inheritance — this is the "class adapter" variant from your book, using inheritance instead of composition). It internally holds a reference to the SquarePeg it's translating for, and overrides getRadius() to compute a fitting-equivalent value.

const hole = new RoundHole(5);

const smallSqPeg = new SquarePeg(5);
const largeSqPeg = new SquarePeg(10);

// hole.fits(smallSqPeg) // ❌ won't compile — incompatible types

const smallSqPegAdapter = new SquarePegAdapter(smallSqPeg);
const largeSqPegAdapter = new SquarePegAdapter(largeSqPeg);

hole.fits(smallSqPegAdapter); // ✅ true
hole.fits(largeSqPegAdapter); // ✅ false

Element	In this example
Client	The code that calls hole.fits(...)
Client Interface	RoundPeg's shape (getRadius()) — what fits() expects
Service	SquarePeg — the incompatible class you can't change
Adapter	SquarePegAdapter — implements RoundPeg's interface (via inheritance here), wraps a SquarePeg internally
Decoupling	hole.fits() never references SquarePegAdapter or SquarePeg by name — it only ever talks to something shaped like RoundPeg


Adapter translates an incompatible interface into one the client already expects — same idea as a physical plug adapter, letting two things that "speak different languages" work together without either one changing.