In js thread code for :-
Single-threaded: true, for JS's core execution
Promises: async concurrency (non-blocking waiting), not parallel CPU execution
Web Workers / Worker Threads: actual parallel threads, but isolated memory (message-passing, not shared-state like traditional OS threads)

const { Worker } = require('worker_threads');
const worker = new Worker('./heavyTask.js');
worker.on('message', (result) => console.log(result));
js
// heavyTask.js
const { parentPort } = require('worker_threads');
let sum = 0;
for (let i = 0; i < 1e9; i++) sum += i;
parentPort.postMessage(sum);


thread will change the same space it has been allocated

we made multithreaded but still race condition is there ( critical section problem)

Promises make your code look async (non-blocking syntax), but they don't guarantee the work is actually happening somewhere else — it might still be hogging the same thread. Workers are the only way in JS to get real parallel execution across multiple threads/cores.

in this we mainly have mutually exculsive progress and bonded waiting

while using flag we cannot support progress (as it is fixed order)