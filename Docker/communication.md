If we want to fetch from outside internet 
or connected to local machine 

First case in case if we want npm packages we need to add RUN npm install (node_modules) in our container
and we saw we can make external api call

Second case connection to local sql setup

we need to correctly give host name host.docker.internal not localhost as container is not knowing that it is completely isolated

why ?
Back to the hotel analogy
The container is your hotel room.
Your laptop (the host) is like... the hotel manager's office, right next door, but not part of the "room phone" system.
Calling "localhost" from your room only rings phones inside your own room, never the manager's office.

// Inside a container, this WON'T reach your laptop's local server:
fetch("http://localhost:5000/api")

// This WILL reach it:
fetch("http://host.docker.internal:5000/api")

communicarion between multiple containers

so when using mysql or any software 

first we need to setup mysql server with host and also we need to to set some env like password and db name

after this we need to check the ip address the container which we need to connect using docker inspect container_name and add that to our connection string

then the connection will be successful even when container on or off data will be persistent

Connecting docker network
in above we can see untill mysql server is not up or containerised there is no point in building application we need to build again
to overcome

we can create docker network create {network_name}

then we can use this network to connect containers

and when creating the mysql server we can just add network name and in host of application we can just put the container name