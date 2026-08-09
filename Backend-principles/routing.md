Routing

http methods:
- GET
- POST
- PUT
- DELETE
- PATCH
- OPTIONS
- HEAD
 describe intent of what they do

 routing will tell the server that where do they want to go

 GET /users  server send array of users (static route)

 fetch from where (resource)

 combination of http method and resource path maps to some handler and perform action

 routing is nothing but mapping http method and resource path to some handler and perform action

 both(http method and resource path) are like key map to value(handler)

api/users/123 - extract id from path and use it to fetch user (dynamic route) route and path parameter /api/users/:id(semantic expressive route)

api/users?name=John - extract name from query parameter and use it to fetch user (query parameter) 
Query parameter — used for filtering, sorting, searching, pagination, or optional modifiers. It's appended after ?.
GET /users?role=admin&sort=name&page=2
GET /orders?status=shipped&limit=10

app.get("/users/:id/orders", (req, res) => {
  const userId = req.params.id;         // path param -> which user
  const status = req.query.status;      // query param -> optional filter
  const page = req.query.page || 1;     // query param -> optional pagination
});

nested routes
api/users/123/posts/123 

route versioning .(instead of changing whole route make changes in version)
api/v1/users
api/v2/users

if route is not exposed we show route not found

/* - it will make if route is not found then it will show route not found