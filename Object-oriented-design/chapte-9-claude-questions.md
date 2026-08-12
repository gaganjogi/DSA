In your own words, what's the key difference between how an object is built using inheritance vs. composition?
my ans:- In inheritance mainly object is built based on inheritance hierarchy (super class attributes and behaviours to child class) while in composition mainly it is build based on composition of different objects to build even more complex objects

Fill in the blank: In this book's terminology, an association is treated as a form of ______.
ans:- composition

True/False: In an aggregation, you typically expose both the whole and its individual parts to the outside world.
ans:- False aggregation is complete a whole not a part 

Identify the relationship: A Car object is built from a SteeringWheel, Engine, and four Tire objects, and the car "owns" these — they don't make sense outside the car. Is this association or aggregation? Why?
ans:- This is aggregation why because we will tell car as abstract we do not say that we bought a large unit having 4 tires a engine and a steering wheel

Identify the relationship: A ComputerBox object needs a Mouse object to do its job, but the mouse is a separate, independently meaningful object connected via a port. Is this association or aggregation? Why?
ans:- this is association because mouse is independent and a meaningful object

Cardinality: For an Employee class, the associations are: Division (1, mandatory), JobDescription (1 to n, mandatory), Spouse (0 to 1, optional), Child (0 to n, optional).
Which of these would you represent as a single object reference vs. an array in code?
Give the Java-style field declaration for Child.
ans:- 1. Division division  

      2.JobDescription descrip[]

     3. Spouse sp

      4 .Child ch[]

Give the Java-style field declaration for Child. - Child ch[]


Optional associations: Why is it dangerous to write code that directly calls employee.getSpouse().getName() without any check first? What must you do instead?
ans:-As this is optional associations some employee class will be having spouse name and some may not for for this we should have a null check so code should not fail and proper error handling for this 

Scenario: You're designing a Library class that has many Book objects — the library "owns" the books, and if the library is deleted, the books (as tracked in this system) no longer make sense either. Would you model this as association or aggregation?
ans:- I would model this for aggreation as book will be not become meaning ful obejct without library

Big picture: According to the text, what are the four properties of stable, complex systems?
ans:- 


Change in answer of library question
