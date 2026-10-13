About LLM call

we will learn about venv - virtual environment
how LLM calls work 
(internally)
what is the input
how we give the input
why is that input
what is my output
how we get the output


3 things
api key - client key
model - model name
messages - messages

in messages we have role and content
role - user , assisstant and system

role is important user or assisstant
system like you need to to behave like this 

response:- choices - main answer (array of answers)
usage - tokens used

now first import os
and next path lib for env and then get the api key and create client
and then model role and then prompt 
and message dict{role and content}
and then next array of messages put that to message

response=client.chat.completions.create(
    model=model,
    messages=messages
)

not prompt it is content