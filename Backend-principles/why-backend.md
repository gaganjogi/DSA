Listening for the https requests

how requests are handled?

domain name and subdomain mapping 
DNS have different types of records like A, AAAA, CNAME, MX, TXT, SRV, etc.

A record - to map domain name to IP address
CNAME record - to map subdomain to domain name

where actually i am getting the ip address from?
from ec2 instance in AWS

requests reaches instance but before it goes the firewall

and also in security groups in ec2 we can allow which ports to be accessed

SSH - 22
HTTP - 80
HTTPS - 443 this is the firewall

after into aws instance reverse proxy is there
to route the requests to different services (NGINX)

requests(browser)->DNS->IP->Firewall->AWS Instance->NGINX(least connections)->Local Host


Why exactly we need backend?

Due to centralization of data and services

why not on frontend

first we need to understand frontend

whatever details it is fetch from the database or server that will be executed by the browser on client machine (browser is the runtime)

but in backend all the operation happened on backend  server and we just receive the result but for frontend all the html css and js code will be sent and browser will be the runtime opposite for the backend

browser is the runtime for frontend
server is the runtime for backend

browser runtime are sandboxed and have limitations like no access to file system, no access to database, no access to network etc.
as we know browser api's cookie's localStorage, sessionStorage,fetch etc.

as we browser will not allow us to call external api will give cors error

That is correct only because or else any website can just access users data from local machine if it is not isolated and may send that to remote server

below reasons make backend necessary:

security concerns
external api calls
databases - as backend will be having connection to db this cannot be done on frontend 
computing power

so centralization of data and services is needed (means backend)