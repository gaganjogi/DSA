///Singleton Pattern
//used to create only one instance of a class
//useful when you want to ensure that a class has only one instance throughout the application
//useful when you want to control access to a shared resource

// mainly when we declare anything (primitive) this will stored in stack
// but when we declare any object (non-primitive) this will stored in heap
// when we create an objects (new Class-name()) this will call constructor and object mapping will be in stack


class Singleton {
    private static instance:Singleton
    private constructor() {
        console.log("Singleton created");
    }
    
    static getSingleInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton()
        }
        return Singleton.instance
    }
    add(){
        console.log('qefe')
    }
}

// const singleton1 = new Singleton();
// const singleton2 = new Singleton();
// console.log(singleton1===singleton2)

const singleton3= Singleton.getSingleInstance()
singleton3.add()
const singleton4= Singleton.getSingleInstance()
console.log(singleton3==singleton4)

/// first is we need to try to create only one object of the class so we use singleton desgin pattern

/// first we try to make this constructor private so that we can't create object of the class and then we use getters that will also create more than one obejct so we make one instance variable to store the single instance 
/// and this instance variable will be static so that it can be accessed by the class itself and then we tried to add lock as in mutiple threads will give error so we make lock safe 
// and then we used eager initialization to avoid lock
// but we cannot do like this if it is heavy object so we use lazy initialization (not memory intensive)

//steps 
// 1. make constructor private
// 2. create static instance variable
// 3. create static getter method
// 4. check if instance is null then create new instance
// 5. return instance


//usage
// 1. Database connection
// 2. Logger
// 3. Configuration
// 4. Cache
// 5. Thread pool
// 6. File system
// 7. Registry
// 8. Session
// 9. Security
// 10. Logging
// 11. Monitoring
// 12. Testing
// 13. Debugging
// 14. Profiling
// 15. Tracing
// 16. Metrics
// 17. Stats
// 18. Analytics
// 19. Reporting
// 20. Dashboard

//manager class will be most singleton class