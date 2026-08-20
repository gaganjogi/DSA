class House {
  constructor(
    walls: number,
    doors: number,
    windows: number,
    hasGarage?: boolean,
    hasPool?: boolean,
    hasGarden?: boolean,
    hasStatues?: boolean
    // ... and it keeps growing
  ) {}
}

// Calling this is a nightmare — what does `true, false, true` even mean here?
const house = new House(4, 1, 4, true, false, true, false);

To overcome this we get this builder method

class House {
  walls = 0;
  doors = 0;
  windows = 0;
  hasGarage = false;
  hasPool = false;
  hasGarden = false;
}

class HouseBuilder {
  private house = new House();

  setWalls(count: number): this {
    this.house.walls = count;
    return this;
  }

  setDoors(count: number): this {
    this.house.doors = count;
    return this;
  }

  setWindows(count: number): this {
    this.house.windows = count;
    return this;
  }

  addGarage(): this {
    this.house.hasGarage = true;
    return this;
  }

  addPool(): this {
    this.house.hasPool = true;
    return this;
  }

  build(): House {
    return this.house;
  }
}

interface HouseBuilderInterface {
  setWalls(count: number): this;
  setDoors(count: number): this;
  setWindows(count: number): this;
  addGarage(): this;
  addPool(): this;
  build(): House;
}

class ConcreteBuilder implements HouseBuilderInterface {
  private house = new House();

  setWalls(count: number): this {
    this.house.walls = count;
    return this;
  }

  setDoors(count: number): this {
    this.house.doors = count;
    return this;
  }

  setWindows(count: number): this {
    this.house.windows = count;
    return this;
  }

  addGarage(): this {
    this.house.hasGarage = true;
    return this;
  }

  addPool(): this {
    this.house.hasPool = true;
    return this;
  }

  build(): House {
    return this.house;
  }
}

function constructStandardHouse(builder: HouseBuilderInterface) {
  builder.setWalls(4).setDoors(2).addGarage();
}

const realHouse = new ConcreteBuilder();
constructStandardHouse(realHouse);
console.log(realHouse.build()); // House object

const blueprint = new ConcreteBuilder();
constructStandardHouse(blueprint);
console.log(blueprint.build()); // "Walls: 4\nDoors: 2\nIncludes garage"

Builder replaces one giant, confusing constructor with clear, chainable steps — and those same steps can be reused to build entirely different kinds of output.

  class Director {
    constructor(private builder: HouseBuilderInterface) {}
    constructStandardHouse() {
      this.builder.setWalls(4).setDoors(2).addGarage();
    }
  }
  const director = new Director(new ConcreteBuilder());
  director.constructStandardHouse();

Element	In our code
Builder interface	HouseBuilderInterface
Concrete Builders	ConcreteBuilder
Products	House object, blueprint string
Director	constructStandardHouse() function
Client	The code calling constructStandardHouse(realHouse) / constructStandardHouse(blueprint)


The base builder interface defines all possible construction
steps, and concrete builders implement these steps to con-
struct particular representations of the product. Meanwhile,
the director class guides the order ofconstruction.

Step methods return this (the builder) to allow chaining; build() breaks the chain and returns the actual product.

Builder is meant to solve the 'telescoping constructor' problem where a class has many optional parameters, making a single giant constructor unreadable and error-prone. It replaces that with clear, named, chainable steps.

Step methods (setWalls, setDoors, etc.) return `this` so calls can be chained fluently. The final `build()` method breaks that chain and returns the actual finished product instead.

reuse can only be done via this pattern not in abstract factory