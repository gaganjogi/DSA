Why rest?

represented in specific format (JSON(server to server),HTML (client to server))

state - current property of the resource (cart reosurce)

transfer - movement of resource between client and server

format state transfer


https://example.com/blog/visit?q=something

resource should be in plural and before that we need version

for single also plural /books/{book_id} 
no space 

if we have phrase like that make that to smallcase and if space is there then add - between them
Harry Potter -> harry potter -> harry-potter
when we use / there is hierachrhial relation between these  /books/

GET is idempotent

Correctly use the PUT(complete resource) and PATCH (partial resource) they are also idemptotent

same for DELETE also idempotency

and i will create more records
custom action we use POST method like /send-email

RESTFUL STANDARDS

how to desgin api when we look at the wireframes how is the design is 

we need to think how users are related to Database(DB) forget all the middle thing

what are resources? nouns in an wireframes 

once nouns are segregated we will go to the db schema design 

finding out actions client will  interact with the server  mainly will be (5 actions as GET, POST, PUT, PATCH, DELETE) 

then we start with api interface design 

for example if i am having organization db then think like this that main actions will be 

createOrg , getOrg, updateOrg, deleteOrg

pagination to be added in getOrg when we are getting the list of organizations instead of getting all we can just get the portion 
and not to make server or user overwhelmed


PAGINATION FILTERING AND SORTING

list api should have 

content of pagination data :-
data , total , page_number , total_pages(depend of limit ) and limit(count of data in each response)

5 org created 
so total - 5
page - 1
limit - 2
total_pages -3 (as limit is 2)
metadata of the page

and also should also have sorting functionality

sorting mostly by createdAt time or some paramters 

and also filter based on like boolean paramters or any parameters

PATCH API

https://example.com/organizations/{org_id}

mainly we send json request body and in response success status code and return that org_id resource or any message 

fetch single organization data mainly get call and delete all three are same api routing format but only intent is different and only for delete we use (204 no content status code)

and not found (404 not found) 
and in list we do not get any error we are not particularly asking any data 

when client request particular data that is the reason we need to send 404 not found instead we need to say empty response

above are normal actions done

what if we have custom actions:- not CRUD

first think wy custom action see if i want to make status of organization to archive we think we can just use patch method and update the status field

but what if we want to make status of organization to archive and also send email to the user

so we can use post method and send email to the user

we mainly use POST http method here 

same like this /organization{org_id}/archive

parameters should be consistent pattern 

always post call cannot be status code as 201 created 

some more things to keep in mind while designing 
make interactive playground (swagger)
make parameters as consistent 
provide some defaults like (limit sort filter)
avoid parameter abbrevation

