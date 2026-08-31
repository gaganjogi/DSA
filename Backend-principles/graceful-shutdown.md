Graceful shutdown - means we need to make our backend to follow good practices

first we need to understand the process life cycle management - as backend server is also nothing but a process running on some server 

so application and os we will talk with each other using signals

application will register handler for specific signals 

from os to application signal 
sigterm - termination signal (have time to complete the task) finish existing requests clean up resources exit (managing the process lifecycle)
sigint - interrupt signal (ctrl+c) (not in process to process communication) (user will interrupt)
sigkill - kill signal (force kill)


sigterm will be used to terminiate if a application is in cloud provider 

application will not get this and also it should not ignore this also 

stop on the fly requests (same apply for database and websockets)
stop accepting new requests
announce for requesting existing process

there should be limit for existing process like(30 secs after it will stop) it is not easy like 30 secs or 60 secs

resource clean up - like file management like eating the ram (clean up after network connection)

clean up in reverse order


shutdown http function next db close 

app to db will be tcp connection from connection pool