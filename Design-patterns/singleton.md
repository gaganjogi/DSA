Singleton ensures a class has only one instance in the entire application, and provides a global point of access to that instance.

Two things it guarantees:

You can never accidentally create a second instance.
Anywhere in your code, you can reach that one instance.

class Singleton{
    private static Singleton instance ;
    
    private constructor() {
        console.log('private constructor')
    }

    static getInstance():Singleton{
        if(instance==null){
            instance=new Singleton();
        }
        return instance;
    }
}

Private constructor + a static method that creates the instance once and returns the same one forever after.

Two problems:-
Testing gets harder: with dependency injection, you can pass a fake Database for tests. With Singleton, Database.getInstance() is hardcoded — you can't easily swap it out without hacky workarounds (like resetting a static field between tests).

static getInstance(): Singleton {
  if (!Singleton.instance) {        // Thread A checks: null, proceeds
                                     // Thread B checks: ALSO null (A hasn't finished yet!), proceeds
    Singleton.instance = new Singleton(); // Both threads now create a SEPARATE instance
  }
  return Singleton.instance;
}

solution we use  public static synchronized Singleton getInstance() untill thread A completes thread B will not execute

and above fix will work but why to make lock a method every time after creation it needs to again to get the same object right to overcome this 

public static Singleton getInstance() {
        if (instance == null) {                 // Check 1: fast, no lock — most calls stop here
            synchronized (Singleton.class) {     // Lock only when it MIGHT need creating
                if (instance == null) {          // Check 2: re-check inside the lock, in case
                                                  // another thread just finished creating it
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }

    The lock stops threads from running at the same time; the second if check stops a thread from redoing work that finished while it was waiting.

    three things to remember
    private instance
    private constructor
    public method to getInstance(keep thread execution in mind not for ts or js)