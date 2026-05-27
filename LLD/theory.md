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