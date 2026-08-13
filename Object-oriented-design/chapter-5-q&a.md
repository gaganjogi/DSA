What's the key difference between the "structured/top-down" approach and the OO approach, according to this text?
ans:-Structured approach we mainly have functions and data is passed , but in OO approach we mainly have objects that is consisting of data and methods(functions)

A well-designed class's public interface should describe the implementation details of how it accomplishes its work.
ans:- False

The rule "all fields shall be private" is meant to support the principle of ______ the implementation. 
ans:- hiding

Constructors: What are the two main responsibilities of a robust constructor mentioned in the text?
ans:- mainly we use this to set the attributes intial state and memory leak

According to the "rule of thumb" in the text, what are the two acceptable outcomes when an error is encountered in an application? What's the one outcome that should never happen?
ans:- fix itself even it would crash then data should not be lost

"highly coupled" classes in your own words. Why is low coupling considered good design?
ans:- if the class are highly coupled then change in implementation part of the superclass may cause to make the changes in subclasses also

You have an existing Shape class, but a new project needs additional functionality that Shape's current interface doesn't provide. What OO mechanism does the text suggest for handling this, without modifying Shape itself?
ans:-use inheritance and extend shape class for new class

Nonportable code: You need to write code that talks to a specific serial port on specific hardware. What design approach does the text recommend, and why?
ans:- do not write hardware specific code in primary class use of wrapper to class this type of Nonportable code

Stubs: In your own words, what is a stub, and why is it useful during development?
ans:- stubs are the testing interface instead of connecting the actual db or full implementation part so that we can test the interface we have currently designed so that we can change in first part only so that it will not make any future changes in interface

According to the text, storing an object by converting it into a stream of bytes is called marshaling.
ans:-False marshaling is between sending the bytes from sender to receiver

Code question: Look at this Calculator class:
class Calculator {
    add(a, b) {
        return a + b;
    }
}

The text describes a class with "no instance fields" where "every method takes all the data it needs as parameters." Does this Calculator class fit that description? What's notably absent from it compared to a typical OO class (like Employee from the earlier chapter)?
ans: yes it fits the description but i think constructor is missing to make intial state of a and b to 0 The real point the text is making: what's absent compared to Employee isn't a constructor — it's state itself.

Why does the text say "in most cases, there is no reason to build a class if it is not going to interact with other classes"? How does this connect to the idea of a class's public interface being about "services the client wants accomplished"?
ans:- Correct — nice connection between "classes exist to interact" and "interface = services for the client."