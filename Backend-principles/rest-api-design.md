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
