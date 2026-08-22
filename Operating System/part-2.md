multithreading:- process?
what is process?
cpp code compile -> executible (.exe) bytes 

if we click exe (process means program under execution) (bringing to RAM)

Thread light weight process-> that execute independently (asynchronous execution) thread

we divided the process -> threads and make me work instead of sequential execution of one process example(jpj to png) fast multithreading (multiple cpu's) 
to achive parallelism
take one process - and divide to three threads (share same memory - no isolation between threads)


difference between multithreading and multitasking?

task:- more than 1 proces concept (as 1 cpu)
process scheduling 
isolation only for process

thread:- more than 1 thread concept (as 1 cpu)
thread scheduling 
no isolation between threads (mutiple tabs in browser)

mutilthreading code depends on number of cpu even if code is written logically divided

4 cores - 4 threads 

thread scheduling : context switch based on priority 

cpu cache in thread level (as thread will not flush the cache) is preserved and no memory address space switch in thread as there are in same space right