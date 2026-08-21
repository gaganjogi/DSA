A database is nothing but structured format of storing data
and persistence layer to do CRUD operations

and manily disk based storage (cheap)

but redis cache will be costly because they are inmemory cache 

database more space trade off to speed (so disk based)

we are talking databases in terms of secondary storage (disk based)

coming to DBMS - storing is not enough we need to do some CRUD operations in very efficient way 

responsibilities:- data organization
access

why dbms required why not in txt based or files 

because parsing is slow and error prone
no structure and consistency concurrency 

types of dbms

relational - table rows,column , predefined schema data integrity
non relational - collections , document , flexible schema (less integrity) more application code work need to be done

data type serial and big serial
floating point are very fast than decimal
for string always go with TEXT 
INT<SMLINT<BIGINT

UUID

JSON - plain text
JSONB - different format efficient advantages

migrations:- changes tracking of any tables 

both up and down migrations of reverting (if something goes wrong previous version)

why migrations:-
keeping track of db changes
rollback using down
