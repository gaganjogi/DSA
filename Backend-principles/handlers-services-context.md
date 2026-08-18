Request life cycle inside server

request->entry->server listen -> /users reaches routing algorithm and map to particular handler -> handler calls service -> service calls repository -> repository calls database -> database returns data -> repository returns data -> service returns data -> handler returns data -> server returns data

Handler/Controller - we recieve req,res object

first take request object and extract data from it
GET request - extract query parameters (optional)
POST request - extract body
PUT request - extract body
DELETE request - extract query parameters


first we need to deserialize into native programming language the request body to dict (python) in js We have JSON.pareser or middleware called binding (req.body -> native language). if not send 400 bad request and terminate

next validate and next transformations
if no transformations we need to add some default values

and then this will be passed to service layer complete data objects

all http are in controller

but service layer is only business logic take some data and return some data nothing http nothing

if required database to persist some data used repository or sometimes just return boolean or something like that

repository layer takes data and constructs db query and return to service 

service along with req,res we get next function 

middlewares are optional
 passing execution context
 modify request and send back reponse

 to do common operation like security check logging to reduce code duplication
 data parsing compression

 security  - cors , auth , rate limit

 logging and monitoring 

 global error handling for fe (order of middlewares is important)

in auth it will pass to next context that is request context
typically first will be cors -> then login middleware -> auth middleware -> global error handling

each of the request will have context attached to it (due to storage)

inside the context some key value store will be accesible to all middleware 

authentication context will be set in the request context

instead of getting user_id from client we get this by authentication context (jwt)