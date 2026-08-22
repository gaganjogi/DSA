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


enums are predefined set of values so data integrity will be maintained (we can check this in application code) not required check all allowed type

primary key not null unique

constrainit (restrcit,cascade,set null,set default) referential integrity constraint as long as some associate data is there(will not delete user)

we follow snakecase

why not have everything in one instead of constantly modify only one table we make like this  (1:1 info) like users tables

for mainly status we use enums on delete restrict if some delete users project can stay intact will check referential integrity constraint

check (interval 1 to 5 ) constraint 

1:1 (primary key of main table and foreign key and primary key in this table)

1:many (primary key in main table but we do not make primary key only foreign key)

many:many (primary key in main table but we do not make primary key ) linking table

one project many users

one user many projects (project_id and users_id) on delete cascade in collab table

primary_key (composite primary key) (project_id,users_id) on combination we made to implicit something and no duplicate 

after db design we need to test data (this is called seeding)

when using use left join even if data is not there in one table

convert and embed use jsonb data 

what is paramterised query?
at first it will be empty but we will provide some value later like finding out user by id (like simple string nothing else) so sql injection will not happen

select * from users where id=:userId (like this parameterised value) we wrap them as string