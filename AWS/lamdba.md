aws lambda  is serverless compute service that lets u run code without provisioning or managing servers, scaling, or maintaining software.

first create  a function then it will be executed by the events

lamdba function is event driven service


like in s3 bucket if we upload any file or db changes api gateway

we can add trigger in lamdba function like s3 bucket changes so lamdba will be retriggered

and in s3 we can specify like for object creation we are triggering lamdba function

we can do like s3 uploads trigger lambda and again need to make changes in s3 so this will not work without giving proper permission


only execute for 15 mins mainly for handler
stateless
cold start delays

data transformation and notifications trigger 

automatic scaling like it will create 100 functions for 100 requests 