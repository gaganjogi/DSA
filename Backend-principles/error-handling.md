Type of errors:_

Logic errors:
 like logic discount
 implement algorithm happen wrong 
 did not think about edge cases

 Database errors:-
 connection error
 db overload
 constraint error  - validation check

 external service errors:-
 query errors 

 in rate limiting we may use exponential backoff

 inpput validation errors
 format check custom data

 configuration errors
 forgetting env like things starting app we need to check the configuration we need to validate if any missing then fail our app there

 app should not fail in runtime starting only it should fail


 PREVENTION:-

 check before like /health /status 

 primary component db based health check like connectivity (time data integrity)

 external service health check for auth and payment

 core functionality

 above four a proactive health check we need to do

 monitoring and observability

 handling error gracefully - immediate error response 

 error recovery strategies

 Data integrity should be there 

 error propogation control - lower level wrap and give that to higher level exception

 async comm - 

 final safety net - global error handling

 explain above thing :- 

 route layer - handler - extract data - deserialisation - validation - service - repository (one thing db operation) - db query

 format check in validation - db level error - bubble the error up in any layer it get right (catch and handle) mainly in middleware layer

 repo - db layer
 service - server layer
 handler - validation error

 400 bad request 
 data base error code : 400 message :- unique constraint violation

if no rows is there global error handling

404 code 

more robust and secure - 500 


no internal data expose to user instead give message generic messages 

and also login one timing attacks owasp attack invalid user 