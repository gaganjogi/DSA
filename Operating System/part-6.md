Mix of process in job scheduler (long term scheduler)

medium term scheduler - more process in ready queue so no space we need to swap
partial executed process 

context switching

keep in mind kernel will do context switch pure overhead the data will be swaped from registers to cpu registers then start from PC

orphan process - no parent process terminated will tag that to init process

parent process will check child process status using wait system call

zombie process - child process terminated but parent not checked status

repaing of zombie process - parent process should call wait system call to clean up the zombie process

process entry will still be there if parent is not executed and child has finished parent should check the status of child to remove from process table