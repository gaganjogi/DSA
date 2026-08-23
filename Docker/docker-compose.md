Docker compose

configuration file to manage multiple containers running on single machine

problem statement
instead of executing multiple docker commands manually we can use docker compose to manage multiple containers


create docker-compose.yml file

first we need to list the services (images) list env container and run docker-compose up in the file directory 
docker compose down to stop and remove

compose for multiple containers 

sql db setup done 

now our app setup we need to do build we can just give dockerFile relative path

if docker container is not showed use docker logs {container name}

if one services if depending on another service to run we can just put depends on 

even after putting depends on it will not work we need to add health check so now my sql container to ready to make connection 
and in service on which it is depending on should have condition only if condition is healthy then it will start

and one more thing even in compose we can run each container alone 
docker-compose run services_name

now docker compose network
whatever services in an docker compose we can access each other using service name no need to make one more network

and also we can add custom network also

docker compose volume and mount bind

port binding

summary:-
managing multiple containers easily
services name build for application 
existing container name 
depends on 
-d detach mode
-v remove volume
health check 
network 
volume 
mount bind 
port binding