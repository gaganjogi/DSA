Combination of our app and docker we need to create image

first name of base image to use for example to execute node js application we need 

# FROM node - latest version will get from docker hub or node:20 to specify the version 

as we will execute this in a container we need some space to run the image in am container

# so WORKDIR /my-app

# next COPY . . copy to my-app or COPY . /mp-app

# then to execute we need to RUN command to run npm install

# RUN npm start

first you create image then run the image
as we need to just write dockerFile need not to run that so  CMD["npm","start"]

running EXPOSE 3000 /optional

then after this we do docker build . (inside app) as dockerFile is present 

complete application in an image 

now running image we can get multiple container

to do as we get the image_id when docker image is created use that docker run image_id

as we need to the app will be inside the container

normally whatever the code we write in our local machine we can just access them in browser it is accesible 

but for application code inside docker container as we know it will be above our machine but enclosed by the container not able to access from outside we need to specify port

IMPORTANT -p HOST_PORT:CONTAINER_PORT

so while running the image we do docker run -p(port binding) 3000:3000 image_id.

to use terminal we can make them to use detached mode before -p we give -d docker run -d -p 3000:3000 image_id

about PORTS

All of these are running on the same machine, so they all share the same IP address. If a data packet just says "deliver this to 142.250.194.78," the operating system has no idea which one of those five programs should receive it.

So the OS says: every program that wants to receive network traffic must claim a port number (0–65535) 2^16 . A port is basically a numbered doorway into that machine, and the OS keeps a table of "which program owns which door."

IP: 142.250.194.78  (the building)
 ├── Port 22   → SSH service        (door #22)
 ├── Port 80   → Web server (HTTP)  (door #80)
 ├── Port 443  → Web server (HTTPS) (door #443)
 ├── Port 3306 → MySQL database     (door #3306)
 └── Port 3000 → your Node app      (door #3000)