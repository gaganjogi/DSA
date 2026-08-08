http - browser use http to communicate with server

Two ideas:

stateless - no memory of previous requests. all necessary data must be sent with each request for every request as server has no memory of previous requests

client server model - http protocol communication will always start from client side

stateless - make simplicity 
distribute request load if server crash no client impact no problem 
statemanagement - cookies, sessions, tokens

https is more secure than http

to enable this communication we need connection so TCP protocol (reliable connection) so no data loss

OSI model - 7 layers
Application Layer
Presentation Layer
Session Layer
Transport Layer
Network Layer
Data Link Layer
Physical Layer


Versions of HTTP
HTTP/1.1
HTTP/2
HTTP/3

as http 1 need to make connections and close every time, so http 2 and http 3 were introduced to overcome these limitations
http 1.1 - make tcp connection multiple requests same connection
http 2 - make tcp connection multiple requests same connection with multiplexing
http 3 - make tcp connection multiple requests same connection with multiplexing and quic protocol (transport layer protocol over udp)

http message

request and response 
request headers payload  body
response headers payload  body

why http headers and payload
it should be top of the parcel to check quickly

request headers:- understand client environment
user agent - what kind of client browser / postman
accept - what kind of response format client wants
cookies - session data
authorization - authentication token

representation headers:- info about body content and response format
content type - what kind of response format server sends
content length - size of response body
eTag - entity tag for cache validation
content encoding - compression used (gzip, deflate, br)


general headers:- info about request/response message
date - when request/response was made
cache control - cache directives
connection - connection type

 security headers:- enhance security of communication
content security policy - specify allowed sources for content
x-content-type-options - prevent mime type sniffing

x-frame-options - prevent clickjacking
set-cookie - set cookies
strict-transport-security - enforce HTTPS
referrer-policy - control referrer information
permissions-policy - control browser features


extensibilty and remote control
add custom headers

act as kind of remote control from server side allow client to sent to server

content-type - html and json
cache-control - cache directives how long it should be in client

http methods
get - retrieve data
post - create data
put - update data
delete - delete data
patch - partial update
options - get available methods
 
 always use patch for partial update

idempotent - call multiple times should have same effect
get put delete options

non idempotent - call multiple times should have different effect
post

cors - cross origin resource sharing

simple request flow 
preflight request flow
 client domain is checked if the host the allowing that domain
in headers if we sent origin:- example.com
in response headers if we sent access-control-allow-origin:- example.com origin:- mainly client domain 

is the access-control-allow-origin:- is empty then browser will blocks the response then we see cors


pre flight request

A preflight request is an automatic HTTP OPTIONS check sent by a web browser before a cross-origin "non-simple" request to verify server permission. 

the method is not simple method like get  post or head must be put or delete
request includes non simpler headers like authorization, content-type, etc

request has content type other than simple types like text/plain, application/x-www-form-urlencoded, multipart/form-data

is made with options method

options do not have any request body and also no respone body
if server supports cors it response something

204 no content
and also max age like 24 hours and not to make pre flight request again and then original request is made

The Access-Control-Allow-Origin header only decides whether your JS is allowed to read the response body. If that header were missing, the comment might still get created server-side — your JS just wouldn't get to see the result.

magine api.example.com is some old internal admin panel that was never built with cross-origin attacks in mind — it just trusts that "whoever can issue a DELETE with JSON must be legitimate." If browsers fired the DELETE first and checked permissions after, the damage (deleted record) would already be done by the time the browser realized it wasn't allowed. Preflight stops that: permission is checked with a harmless OPTIONS before anything destructive is attempted.

HTTP Response Status Codes

set of standard to follow for any server to build this 

1xx - informational (headers is received and client can send the request body) like large data needs to be sent (switching protocols)
2xx - success (200 request is success , 201 created resource,204 no content)
3xx - redirect (301 moved permanently, 302 temporary redirect, 304 not modified(cached response)) (old users still using the old urls will be moved to new urls)
4xx - client error (400 bad request, 401 unauthorized, 403 forbidden(even if you are authorized you are not allowed to access this resource), 404 not found, 405 method not allowed(invalid http method) 409 conflict (resource already exists) 429 too many requests 422 unprocessable entity)
5xx - server error (500 internal server error, 501 not implemented, 502 bad gateway(nginx invalid response from backend), 503 service unavailable(maintenance mode or server down), 504 gateway timeout(server took too long to respond))


HTTP Caching

Storing the copies of resources on client side to reduce repeated requests to server
cache-control header is used to control caching
max-age is used to specify the maximum age of the cache in seconds
eTag - is nothing but response hash (check the number) which is used to check if the resource has been modified
last-modified - is used to check if the resource has been modified

and then in request we can send If-None-Match header with the eTag value 
 If-Modified-Since header with the last-modified value
 response will be 304 not modified if the resource has not been modified

 ETag is generally preferred over Last-Modified because it catches changes even when the modification happens within the same second, or when content changes but the timestamp logic is unreliable.

 Content Negotiation

media type application/json, text/html, image/png, etc.
language en, es, fr, etc.
encoding gzip, deflate, br, etc.

why compression:-
if the file is very large (response size is very large) we can compress in format accepted by client and then (browser)decompress on client side


persistent connections:-
keep-alive header is used to keep the connection alive (timeout is 5 seconds by default)

Handling large requests and responses:-

Multipart data is very large files sent to server from clients
in parts delimited by boundary parameter 

Streaming requests:- large responses from server to client 
content-type: text/event-stream

SSL for securing communication not intercepting
replaced by TLS (Transport Layer Security) client and server authenticate each other 
underlying https uses tls
when we visit https://example.com we are using tls encrypts the data between your browser and the server (protects from eavesdropping and tampering)