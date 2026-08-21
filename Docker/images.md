Pre defined images 
we can check in docker hub 

or we can just use docker pull image_name


to run in interactive mode use -it image_id for enviroment like python or node js
and after this we can push and they can test

we need to create repository to store or iamges 

to push first we need to login in terminal to docker login
and then it will give one image one based on that we need to push the same name here 


how to pull?
just take the image name pull and run the images to get the container

docker volumes?
to store data of the application permanently

while run the docker 
You're right — Docker volumes live on the host (your local machine), not inside the container. But there's some nuance depending on which type you use:

Named volumes (docker run -v myvolume:/app/data ...)

docker volume ls

docker volume inspect 00cbd8775dcfb509ebb2e4c7c8cd31cf58eab2a566f518f86f19775d58ab44c1 - to see some data 

[
    {
        "CreatedAt": "2026-07-22T12:48:44Z",
        "Driver": "local",
        "Labels": {
            "com.docker.volume.anonymous": ""
        },
        "Mountpoint": "/var/lib/docker/volumes/00cbd8775dcfb509ebb2e4c7c8cd31cf58eab2a566f518f86f19775d58ab44c1/_data",
        "Name": "00cbd8775dcfb509ebb2e4c7c8cd31cf58eab2a566f518f86f19775d58ab44c1",
        "Options": null,
        "Scope": "local"
    }
]

BIND MOUNTS:-
see we were updating through code (volumes) instead we can bind mounts

so if i update the file that is external to that container i can just do like this 

docker run -v {physical machine}:/{WORKDIR}/{exact folder or file name} image_id

docker run -v /USers/desktop/myapp/servers.txt:/myapp/servers.txt image_id

no volume created we just mount using physical machine 

code depend on external code we do like this 

.dockerignore

why building not to insert will building image 