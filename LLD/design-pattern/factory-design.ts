// factory design pattern 
// think like this is a class to create a aboject so that application and object creation will be seperate
// types 
// simple factory - principle
// factory method - design pattern
// abstract factory - design pattern

//simple factory example
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

class BurgerFactory{
    createBurger(type:string):Burger {
         switch(type){
             case "vegburger":
                 return new VeggieBurger()
            case "chicken":
                return new ChickenBurger()
            case "beef":
                return new BeefBurger()
         }
         throw new Error("Invalid burger type")
    }
}


let create_chicken_burger=new BurgerFactory().createBurger('chicken')
create_chicken_burger.prepare()
//definition:-  a factory class that decides which concrete class to instantiate