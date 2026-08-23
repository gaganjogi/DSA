user mode and kernel mode commuinication through inter process communication

Normal rule: processes are private, isolated, can't touch each other's memory.
Shared memory: a special, deliberate exception — like agreeing to build one shared room — used when two processes want to exchange data fast.

in this we mainly studied about components of OS

user space - where actually user will interact and no access to ahsrdware still it need to ask kernel to execute some jobs
kernel- heart of OS this is what manages and talks with hardware

kernels functionality

process management
file management
memory management
i/o management

types of kernel

monolithic kernel - all functionality in kernel space(all four) full fast bulky size so linux is fast
micro kernel - file and memeory in user and process and i/o in kernel space (latency)
hybrid kernel - file in user space process memory i/o in kernel space 

communication between process (inter process communication)
shared memory - attaches and exchange work
message passing - through communication channel
