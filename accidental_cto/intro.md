pg dump in postgres to copy data as an backup while moving it to seperate server
earlier it was in same server so localhost now different server

now two different server application server and database server

still issue in loading because of two different services so more latency

to cover this we need to do less db queries mainly writing more optimised queries (N+1) query problem
solution- select_related and prefetch

and add them in application code so make it latency free

pg connection everytime instead of making application code to connect and disconnect use pgbouncer for this 

scaling up -vertical scaling 
scaling out - horizontal scaling

We needed a traﬃc cop. We needed a load balancer.
to decide where to send the next customer. In the
world of load balancing, these rules are called algorithms.

1. Round Robin: The Simple but Dumb Approach

 if Server B is still struggling with its previous
complex task while Server A is completely free. This
can lead to an uneven distribution of the actual
workload.

2. Least Connections: The Smarter Approach

 in, the load balancer sends
it to the server with the fewest active connections.

nginx as load balancer instead of AWS elastic load balancer

in nginx configuration we specify the algorithm and servers in our fleet

# "app_
servers" group we defined above.
proxy_pass http://app_
servers;
proxy_
set
_
header Host $host;
proxy_
set
header X-Real-IP $remote
_
_
addr;
proxy_pass directive told Nginx to start directing traﬃc. After

by this the application server was working good(kitchen) but at the same time they need more data right(pantry) database server was using more resources CPU was choking