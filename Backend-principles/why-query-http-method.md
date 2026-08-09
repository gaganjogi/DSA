GET /api/users?name=john&age=25

<intent> <resource_name>

Mainly this is the upgrade version of get call as get is an idempotent operation

why because?
 some times get call becomes more complex and we need to pass more data in the query string 
 and we have resitriction in length as of 8000 charaters 
 paramters in query string are visible in the url
 complexity in url

Still now they were doing some hacky way?
that is they were doing POST request /get-users as post will be having request body and we can pass more data in the request body
like filter criteria, pagination, sorting, etc.

but intention is wrong and not caching as it is POST request(create request)

THIS is where QUERY HTTP METHOD comes into picture

QUERY /get-users
REQUEST BODY:
{
    "name": "john",
    "age": 25
}

and it is idempotent operation
