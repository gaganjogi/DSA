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

Database Replication (as read operation were chocking the most crucial write operation)

 one we implemented, is
called Master-Slave Replic

The Master is the exclusive, VIP section of the club. It’s the
single source of truth.

The Read Replica (Slave): 

how 
How Streaming Replication Works in PostgreSQL
PostgreSQL has a brilliant, built-in feature for this called
streaming replication.

The WAL (Write-Ahead Log): The Master database, - whatever changes happens we write in this log book

The Stream: whatever changes happens in the log book will the streamed to slave db with private connection

The Application: The Read Replica receives this stream of changes

major changes in code 
1 .earlier one db 
now one for master - write operations
slave - for read operation


2 . Database Router:
decides which database it
should be sent to

We had successfully scaled our database.

CAP theorem: only when distributed systems come into picture
Consistency, Availability, Partition Tolerance

availability over
strict consistency

strong consistency - all nodes see the same data at the same time
eventual consistency - nodes may see different data at different times
causal consistency - nodes see data in the order it was created


 full second or two. This
delay is called replication lag

The live stream of data from the Master to the Replica is
incredibly fast, but it is not instantaneous. 

We couldn't get rid of replication lag—it's a physical
limitation. But we had to find a way to shield our sellers from
its eﬀects.

You must consciously identify which
parts of your application require strong consistency and
which can tolerate eventual consistency.

The logic is simple: for a specific user, immediately
after they perform a write operation, we should temporarily
break our own rules and send their read queries to the
Master database as well.

"This user is in a VIP window for
the next 60 seconds.
"


now we were pushing everything to production we did not have test instance

The Environments

The Development Environment (The Test Kitchen)
This is the developer's laptop.


The Production Environment (The Dining Room)
This is the live server that real users interact with.

 The Staging Environment (The Dress Rehearsal)
 This was the critical piece we were missing. A Staging
environment is a complete, parallel universe that is an exact
mirror of your Production environment