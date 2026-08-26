DBMS implement abstraction

main objective how to achieve abstraction

three levels

physical view -  student only data is stored how to store data

conceptual level / logical level - student table with column what data is stored and relationships like courses  (DBA)
 
where abstraction comes:- in physical layer even if data stored is moved to disk to ssd logical level is untouched

view level - for different service different view schema

logical level schema is what we write

depth in logical level schema - to design how my data will see Data models 

to use these we need languages 

same language - SQL
to specify schema - DDL - create table and constraints 
to retrieve or manipulate data - DML - select and insert

how app access DB?
we use interface jdbc connectivity

in js app will write sql with using interface (pg node js package ) connect with postgres db

DBA - data and programs to access the data 