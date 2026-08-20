Why OS?

mainly for resource allocation (one app will take more space even if not in use)
resource and memory management (while writing app code developer will not think about resource allocation code no DRY)
isolation and protection management (logical should be seperated)

act as an abstraction layer between hardware and software (as an interface)
computer hardware with only os not any app

os is a software  which manages the computer system that manages both computer hardware and software and it provides and environment for the user to run the application program by hiding underlying complex hardware and acting as resource manager (CPU,memory,GPU)


Goals:-
maximum cpu utilization 
no for process starvation
high priority jobs

Types of OS:-

single process os (one process at a time) not satisfy any goal
batch os (operator sort jobs and divided into batches (similar jobs)) sequential execution (no goals resolved)
multiprogramming os single cpu (multiple processes at a time) but still sequential execution (context switching) process control block like process 1 executed still 10 lines from next address line will be executed 

multitasking os:- same as multiprogramming but here time sharing no untill only for I/O we will add some time quantum 
multiprocessing os:- same as multitasking but here multiple cpu's are there 
disturbuted os:- loosely coupled low end cpu or high end cpu and multiple users 
real time os:- within seconds like air traffic control


multithreading:- process?