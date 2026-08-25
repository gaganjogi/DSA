Background tasks that are outside the request and response life cycle

one scenario:-
mail sending after signup the user will be notified with the email but what if the resend may be down right and user will not recieve the mail this is such a bad experience this is synchronous workflow

second :-
instead it will generate html template code and everything and then it will push the task to  the queue and return success

email task queue

in the task queue there are consumers (run in different process) json format deserialise into object (js)

register a handler and then will hit after receiving all the data required and make a call to resend

if fails :- retries after 1 mins or anything (exponential backoff) 1 2 4 8 minutes anyway this will be awake (resend)

examples:- if it is depending on external services like 
email
image processing - resize
generating reports - 

bullMQ all have schedule tasks also

push notifications - register is provided by OS backend store device data based on particular os user is using call to google or apple os  

Battery and network efficiency
Phones can't keep an open connection to every app's server — that would drain the battery fast and hammer the network. Instead, the OS keeps one single persistent connection to Apple's or Google's servers. Every app's notifications ride on that one connection. Your server piggybacks on it rather than maintaining its own.

producer will creates the task and push to queue (our application code) enqueueing the task
consumer - same backend application code or picks the task and executes them

queue also called broker

sees new task consumer will dequeue

when enqueue - serialized to json (rabbit queue)

when consumer completes task sends ack to queue 

visibility time out - is considered as inprogress consumer no ack queue will make available for other consumer

Types of tasks:-

One off tasks - example :- sending email

recurring tasks:- sending reports daily, weekly, monthly

chained tasks :- udemy video upload (video processing encoded and video resolution thumbnail generation) 

Batch tasks :- delete account create a task and delete as the user can be more data and may give time so api should not lag

Safely executed - idempotency
error handling
monitoring - grafana
scaling - scale my consumers easily
ordering 
rate limiting - for external call cost increases

best practises:-

keep task small
avoid long running task
error handling and log
queue health worker health