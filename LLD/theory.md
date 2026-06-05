Mainly in LLD we consider maintainability scalibilty and reliability
LLD - code structure 
HLD - system structure 
History of OOPS:-
First start of with the machine language(0/1)
Assembly language
Procedural language (funtion blocks)
Object oriented programming (classes and objects)


Real world objects
Objects interact with each other

Object:- contains state(characteristics) and behaviour(actions)

Like Owner owns the car (list all the characteristics and behaviour of the car and owner)

like for example owner will be having name, age, car, phone number, address and actions for driving the car 
every time in drive method owner will be using the actions that are there in the car very difficult in procedural language

and if i want to create new car i need to recreate the car class and object

procedural prog is not high scalability and reusability


Class Car{
    brand : string
    model : string
    year : num
    color : string
    price : num

    start()
    stop()
}


Class Owner{
    name : string
    age : num
    car : Car
    phone number : num
    address : string

    drive(){
        car.start()
    }
    stop(){
        car.stop()
    }
}

Abstraction mainly used to hide the implementation details and provide a simplified view of the system.
and one more thing mainly it is like a interface 
Hides the implementation details and provides a simplified view of the system.
 Mainly data hiding

 ENCAPSULATION mainly used for data security 
 it is like a capsule

 in encapsulation we mainly hide the variables that cannot be accessed directly from outside the class making them as private

 and we mainly access them by getters and setters with some validation

 this is main thing what encapsulation provides for example we can user should can not directly access the private variable this is mainly data security

 
 inheritance

 parent child relationship
  we use access modifier to access the any characteristics 
  private we cannot access
  protected we can access in child class but not in parent class
  public we can access in child class and parent class


  if i inherit the class pubicly it will be in child class but not to next class of the child mostly this cases only


  interface banktransfer{
    deposit(amount : num)
    withdraw(amount : num)  
    getbalance() : num
  }

we mainly use interface (coming to inheritance)
  class savingsaccount{
    constructor(private balance : banktransfer){}

    applyinterest(){
        this.balance.deposit(this.balance.getbalance() *0.1)
    }
  }
  
  "favor implements + dependency injection over extends".

  class EmailChannel implements NotificationChannel { ... }
You're doing realization + polymorphism — the GOOD path. Not classical inheritance. You're not inheriting any code; you're just promising to provide a send() method. Anyone using NotificationChannel as a type can swap in any implementation polymorphically.

Polymorphism
dynamic polymorphism and static polymorphism

function overloading(static polymorphism) and function overriding
(dynamic polymorphism)

like having two same function in parent class and child class but there result will be different (so dynamic polymorphism) method signature should be same everything same

but in static based on the requirement we try to add one or more parameter in the same function so based on the requirement we can add or remove parameter