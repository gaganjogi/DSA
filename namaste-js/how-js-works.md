Everything in JS happens in execution context

How execution context looks like

Two components
Memory component {variable environment} stored in key value pair
Code component {thread of execution}

JS is synchronous and single-threaded language
JS execute one command at a time in specific order



The Call Stack — expect this every time
JS uses a call stack (LIFO) to manage execution contexts
GEC goes in first (bottom of stack)
Every function call pushes a new FEC on top
When a function returns, its context is popped off
Stack overflow happens when this stack gets too deep (e.g., infinite/uncontrolled recursion) — good to mention as a real-world consequence

 Hoisting — this is the #1 follow-up question

Because of the memory creation phase, before any code executes:

var variables are hoisted and initialized to undefined
Function declarations are hoisted with their full body
let/const are hoisted too, but land in the Temporal Dead Zone (TDZ) — accessing them before declaration throws a ReferenceError, not undefined

console.log(a); // undefined
console.log(b); // ReferenceError (TDZ)
console.log(c); // logs the function itself
var a = 1;
let b = 2;
function c() {}