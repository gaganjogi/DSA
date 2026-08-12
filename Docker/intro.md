Whatever dependencies a application needs to run, we can package it in a docker container.
Can be easily deployed on any machine.
It can be easily shared

Where actually container comes in computer system?

Hardware
Operating System
Docker Engine
Container (app, dependencies)

and also multiple container also

and instead of virtual machine, we use container (to execute on same machine)

Docker vs VM's
low impact on OS high impact
share is easy and distrubution is slight tough

Main components of Docker
1. Docker File - instructions to create image
2. Docker Image - single file with all lib and dep to run an program (multiple image multiple container)
3. Docker Container - running instance of image
4. Docker Registry - store and distribute images

registry is single source of truth for images
repositories are like folders in registry