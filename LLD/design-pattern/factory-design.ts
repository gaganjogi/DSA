// // factory design pattern 
// // think like this is a class to create a aboject so that application and object creation will be seperate
// // types 
// // simple factory - principle
// // factory method - design pattern
// // abstract factory - design pattern

// //simple factory example
interface Burger {
    prepare(): void;
}
class ChickenBurger implements Burger {
    prepare(): void {
        console.log("Chicken Burger");
    }
}
class BeefBurger implements Burger {
    prepare(): void {
        console.log("Beef Burger");
    }
}
class VeggieBurger implements Burger {
    prepare(): void {
        console.log("Veggie Burger");
    }
}

class PremiumBurger implements Burger {
    prepare(): void {
        console.log("Premium Burger");
    }
}
class SupremeBurger implements Burger {
    prepare(): void {
        console.log("Supreme Burger");
    }
}

// class BurgerFactory{
//     createBurger(type:string):Burger {
//          switch(type){
//              case "vegburger":
//                  return new VeggieBurger()
//             case "chicken":
//                 return new ChickenBurger()
//             case "beef":
//                 return new BeefBurger()
//          }
//          throw new Error("Invalid burger type")
//     }
// }


// let create_chicken_burger=new BurgerFactory().createBurger('chicken')
// create_chicken_burger.prepare()
// //definition:-  a factory class that decides which concrete class to instantiate 

interface BurgerFactory {
    createBurger(type:string):Burger;
}

class SinghBurgerFactory implements BurgerFactory {
    createBurger(type:string): Burger{
        switch(type){
            case "vegburger":
                return new VeggieBurger();
            case "chicken":
                return new ChickenBurger();
            case "beef":
                return new BeefBurger();
        }
        throw new Error("Invalid burger type");
    } 
}
class ChawlaBurgerFactory implements BurgerFactory {
    createBurger(type:string): Burger{
        switch(type){
            case "premium":
                return new PremiumBurger();
            case "supreme":
                return new SupremeBurger();
        }
        throw new Error("Invalid burger type");
    } 
}

console.log("Starting execution...");

const singh_burger_factory = new SinghBurgerFactory();
const chawla_burger_factory = new ChawlaBurgerFactory();

console.log("Creating veggie burger...");
let veg_burger = singh_burger_factory.createBurger("vegburger");
console.log("Calling prepare on veggie burger...");
veg_burger.prepare();

console.log("Creating premium burger...");
let premium_burger = chawla_burger_factory.createBurger("premium");
console.log("Calling prepare on premium burger...");
premium_burger.prepare();

console.log("Execution complete!");

//factory method pattern - defines an interface for creating objects, but lets subclasses decide which class to instantiate

