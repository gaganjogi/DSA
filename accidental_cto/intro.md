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

Your staging environment must be a
MIRROR of production

This is the golden rule of staging: your staging environment
must be as identical to your production environment as
possible.

as we cannot add directly production data due to security reasons
The solution was to build a Seeding and Sanitization
Pipeline.

Step 1: Seeding
The script would start by taking a full backup of our live
production database using pg_
dump. This gave us a
complete, structurally perfect snapshot of our data at that
moment.

Step 2: Sanitization
This was the critical step. Before loading this backup into the
staging database, the script would run it through a
"sanitizer" that would cleanse it of all sensitive information:

The Assembly Line (Deployment Pipeline.)

The goal of a good process is to make
deployments BORING

raise pr
take pr review
automated deployment to staging

then github actions will run the tests suite and check any other existing functionality is broken or not (regression)
and then the code is merged to staging branch and the QA will test this 
and then after successful testing it will be pushed to production

Need for Speed: Caching with Redis

 Repetitive Database Queries

 Django Debug Toolbar, which
allows you to inspect everything that happens during a single
page load

 Yet, our system was dutifully
rebuilding the entire menu from scratch, piece by piece from
the database, for every single one of the thousands of
customers who visited the page every hour

This is the principle of caching:
1. Identify an operation that is expensive to perform.
2. And is frequently requested.
3. And produces the same result every time.
4. Perform the operation once.
5. Store the result in a faster, temporary location (the
cache).
6. For all subsequent requests, serve the result from the
cache instead of performing the expensive operation
again.

"short-term memory" 
entire stack: Redis.

Redis (which stands for REmote DIctionary Server)

A traditional database like PostgreSQL is primarily
disk-based. It stores data on a Solid-State Drive
(SSD) or a Hard Disk Drive (HDD). 

Redis is an in-memory database. It stores all of its
data directly in your server's RAM. Think of Redis as a
giant whiteboard right next to your desk. To get a
piece of information, you just have to glance 

The other thing that makes Redis so fast is its simplicity. It’s
a key-value store,. There's no complex query language like SQL.
You just say GET key. 

if we update in master db 
This is the problem of cache invalidation, famously known
as one of the two hardest problems in computer scien

The Real Solution: Event-Driven Invalidation

This is event-driven cache invalidation. To do this, we
needed two things:
1. A way to detect the "event" that data has changed.
2. A way to broadcast a message about that event to a
listener.

 Postgres Triggers and
LISTEN/NOTIFY

 The Database Trigger (The Security Sensor) whenver update create or delete happens in the database, it will trigger an event

  NOTIFY (The Broadcast)

   LISTEN (The Radio Receiver)
    to connect to the database and LISTEN to
the product changes channel