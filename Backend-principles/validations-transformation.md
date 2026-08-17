First the pyramid is like this repository ->services -> controller

basic idea is to add validations in controller layer and structure of the data should be followed and expected field type everything should be correct (starting layer) or system should not break unexpectedly

we will be having certain db level check on constraint also



Types of validations:-
Syntactic validation - email, phone number, date etc
Semantic validation - provided data should make some sense - user should provide correct date(dob should be past value not future ) and age 
Type validation - basic validtion of datatype (string , integer,boolean)
complex - length and password check (and one more example if married is true then provide wife name like this check)


As query parameter will be string by default convert them into int
app.get('/api/users', (req, res)) => {
  // 1. Read query params, with sensible defaults
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;
}

data is going through some change to accept by server into a desirable format

and one more check if user provide Capital letters in server logic it may be made to lowercase (transformation)

same for number and date


Frontend validation vs ServerSide validation:-

For all api we need to both 
FE for user experience (mainly in forms like password is not matching)
BE for security

BE depends on frontend validation then server breaks if the client is changed (client validation for ux)

untill fe(immediate feedbacks) is not passed be call will not happen