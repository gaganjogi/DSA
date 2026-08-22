Strategy is a behavioral design pattern that lets you define a
family of algorithms, put each of them into a separate class,
and make their objects interchangeable.

components:-

Context class
strategy interface
concrete strategies
Client

Client -> Context -> Strategy Interface -> Concrete Strategies

problem:-

changing main class

class Navigator {
  buildRoute(from: string, to: string, mode: string) {
    if (mode === "car") {
      console.log(`Building fastest car route from ${from} to ${to}`);
      // car-specific routing logic
    } else if (mode === "bike") {
      console.log(`Building bike-friendly route from ${from} to ${to}`);
      // bike-specific routing logic
    } else if (mode === "walk") {
      console.log(`Building walking route from ${from} to ${to}`);
      // walking-specific routing logic
    }
    // adding a new mode means editing THIS method again
  }
}

interface RouteStrategy {. ///strategy interface
  buildRoute(from: string, to: string): void;
}

class RoadStrategy implements RouteStrategy { //concreate strategies
  buildRoute(from: string, to: string): void {
    console.log(`Building fastest car route from ${from} to ${to}`);
  }
}

class BikeStrategy implements RouteStrategy {
  buildRoute(from: string, to: string): void {
    console.log(`Building bike-friendly route from ${from} to ${to}`);
  }
}

class Navigator{ context class

    private strategy: RouteStrategy;

    constructor(strategy: RouteStrategy) { }

    setStrategy(strategy:RouteStrategy){
        this.strategy=strategy
    }

    buildRoute(from: string, to: string) {
        this.strategy.buildRoute(from, to);
    }
}

class Client {
    constructor() {
        const navigator = new Navigator(new RoadStrategy());
        navigator.setStrategy(new BikeStrategy());
        navigator.buildRoute("A", "B");
    }
}

Strategy replaces a big if/else picking between algorithms with separate classes — and the context just holds whichever one is currently plugged in, swappable anytime.


Use the pattern when your class has a massive condition-
al statement that switches between different variants of the
same algorithm.

Context class has a strategy - composition

Strategy works on the object level, letting
you switch behaviors at runtime.