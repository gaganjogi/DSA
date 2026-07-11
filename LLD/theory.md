
soMainly in LLD we consider maintainability scalibilty and reliability
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
and one more thing mainly it is like a interface  (interface)
Hides the implementation details and provides a simplified view of the system.
 Mainly data hiding

 ENCAPSULATION mainly used for data security  (access modifiers)
 it is like a capsule

 in encapsulation we mainly hide the variables that cannot be accessed directly from outside the class making them as private

 and we mainly access them by getters and setters with some validation

 this is main thing what encapsulation provides for example we can user should can not directly access the private variable this is mainly data security

 
 we mainly use getters and setters to update anything of private access modifiers this is mainly data security

 
 inheritance

 parent child relationship
  we use access modifier to access the any characteristics 
  private we cannot access
  protected we can access in child class but not in parent class (protected mainly for inheritence)
  public we can access in child class and parent class


when we are using extends inheritance we need to call the parent class constructor before the child so we use the super() function
  if i inherit the class pubicly it will be in child class but not to next class of the child mostly this cases only
his is the beginning of the Repository pattern, extremely common in LLD interviews (Design a Library System, Design a Parking Lot, etc. all use this idea — a manager class holding a collection + lookup methods).

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

as if we declare something in an class that will be used by other class then that class becomes abstract class (dynamic polymorphism)

there will be different in the output of two classes but they will be required so we will define that\

Static polymorphism
but in static based on the requirement we try to add one or more parameter in the same function so based on the requirement we can add or remove parameter
UML diagram Unified Modeling Language

Types of UML 

structural (1 .class diagram) and behavioral (sequence diagram)

in a card having class name members and methods having all the access modifiers (private (-) protected (#) public (+))

2. associations/connections total 14 are there currently 2 is enough

class association and object  association 

in class association - (inheritance association) (is-a) relationship manual car is a car

object association - (simple aggregation ,composition) (has-a) relationship all comprises composition but for theory we have differentiated

inheritance - i -> is nothing but a is-a relationship


Composition - has-a relationship

simple relationship:- weakest relationship - arjun lives in house weakest relationship

aggreation - this is not fully strong relationship for example a room compriese of a house having chair lamp and bed
represented by diamond  has-a relationship

composition - this is strong relationship for example chair comprises of arms seat legs and wheels
represented by filled diamond having has-a relationship

composition representation

class A{
  method_1  (){
  
  }
}

class B{
  B(){
    B= new A()
  }
  method_2 (){
  
  }
}

let b = new B()
b.method_2()
b.a.method_1()


implement shapeType{
  area(type:string):Promise<number>
}

class Triangle implements shapeType{
  area(shape){
    return Math.PI * shape.radius ** 2;
  }
}

sometimes in lld we cannot decide to use aggregation or composition it depends on situation if two entities are tightly coupled (composition) or loosely coupled (aggregation)
in sequence diagram we represent objects like object inside box
lifeline between application and then activation bar send information to other object

messages async and sync

then create and destroy message in create we create new object and create lifeline but in destroy we will delete the object and delete the lifeline

next lost and found message sent message got to inactivation line of the object so lost and found message found as it is in activation line


solid principles


single responsibilty principle
only one class one reason to change

ij future if any things wants to change we need to completely make new class or make interfaces

open for extension closed for modification
we need to follow abstraction polymorphism and inheritance we need to completely use this instead of changing or modification


class Userservice here we mainly saying we first validate the user input then saves to db and send welcome email and then logs the action

so in this case below is the class

class UserValidate{
  validateUserInput()
}
class UserSave{
  saveToDb()
}
class SendWelcomeEmail{
  sendWelcomeEmail()
}
class UserLog{
  logAction()
} 

see from the above this we get to know right way like splitting the things into different classes but here there is a problem of orchestration which one to call right so we came up to create one more class for job orchestration 

Controller
    │
    ▼
UserRegistrationService.register(data)   ← orchestrates, sequences, shapes response
    │
    ├── validator.validate(data)          ← just validates, throws if bad
    ├── repo.save(email)                  ← just persists, returns saved record
    ├── emailService.sendWelcome(email)   ← just sends, knows nothing about DB
    └── logger.info(message)             ← just writes, knows nothing about business logic

first main thing to keep in mind while creating the new orchestration class think of what will be constructor paramters 

// ✅ In tests — inject fakes
const service = new UserRegistrationService(
  new MockValidator(),
  new MockRepo(),       // no DB hit
  new MockEmail(),      // no email sent
  new MockLogger()
);

// ✅ In production — inject real ones
const service = new UserRegistrationService(
  new UserValidator(),
  new UserRepository(),
  new SendGridService(), // swap nodemailer → SendGrid, zero changes here
  new WinstonLogger()
);


class UserRegistrationService{
  constructor(valid,repo,email,logger){
    this.valid = valid  
    this.repo = repo
    this.email = email
    this.logger = logger
  }

  async register(data){
    const email = this.valid.validate(data)
    const saved = this.repo.save(email)
    this.email.sendWelcome(email)
    this.logger.info(message)
  }
}

Three things, in order:

Split by who owns the change — validation, persistence, notification, logging each have a different owner. That's your cut line.
Constructor = inject everything — orchestrator creates nothing itself, receives all dependencies. That's how you know the class is truly an orchestrator and not hiding responsibilities inside.
Method = read the sequence like a story — each line does one thing, order is intentional, no logic leaks in (no if, no SQL, no templates). If you can explain why each line is in that exact position, you've demonstrated deep understanding.


OPEN FOR EXTENSION BUT CLOSED FOR MODIFICATION:- 


"Both interface and type can define a contract for a class, but interface is preferred because it supports declaration merging, reads more naturally with extends for hierarchies, and is the idiomatic OOP-style contract in TS. type is more general-purpose — used for unions, tuples, and complex type compositions that interface can't express."