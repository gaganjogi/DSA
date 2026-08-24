System calls:-

user space

kernel space

need to talk with hardware we need to talk with kernel space

example mkdir :- new folder user space system call interface implemented in C lang

creating the process

when we run exec file it will go to kernel space and create folder software interrupt

User program calls read()
        ↓
Standard library wraps it, triggers software interrupt (e.g., INT 0x80 on older x86 Linux)
        ↓
CPU switches to kernel mode, jumps to interrupt handler
        ↓
Kernel's syscall handler figures out which syscall was requested (based on a number in a register)
        ↓
Kernel executes the actual read() logic
        ↓
Control returns to user program

example process creation
fork()
exit()

create file is file management system call
execute process is process management system call
to check process do ps -a

to kill process kill -9 pid (abrupty i need to stop) also system call


The monolithic vs. hybrid difference isn't about where code runs (both are kernel-space-heavy) — it's about how cleanly the code is organized internally and how rigidly components are coupled together. Hybrid kernels try to borrow microkernel-style modularity and interface discipline, without paying the performance cost of actually moving things into user space like a true microkernel does.


what happens when computer on? boot process

5 steps
power supply
cpu load bios or uefi 
will initialize cpu
goes to bios chip
load program
runs tests initialize hardware

booting device (program boot loader) on OS

MBR - master boot record 0th index

bios-> run tests-> give to boot loader -> give it to OS

32 bit 64 bit?

32 bit register 32 bit address in 1 having 8 bit (0-31)

to fetch cpu nth different address 
in 1 2 to power 32 unique address 4bg ram  -> 2 ^64 different address cycle also comes count (Hz)

installing more RAM no use on 32 bit system