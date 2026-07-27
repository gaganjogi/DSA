pg dump in postgres to copy data as an backup while moving it to seperate server
earlier it was in same server so localhost now different server

now two different server application server and database server

still issue in loading because of two different services so more latency

to cover this we need to do less db queries mainly writing more optimised queries (N+1) query problem
solution- select_related and prefetch

and add them in application code so make it latency free

pg connection everytime instead of making application code to connect and disconnect use pgbouncer for this 