What ever is there in callstack the js engine will execute that one and move on to next it will not wait 

and if we want to execute something after some time we can use setTimeout
but that will be not there for long in callstack(LIFO)

callstack inside js engine and js engine is part of browser api

browser have js engine and web api's
timer 
local storage
url

communicate for external worlds and get and show to user

js engine have these access (web apis)

global object
setTimeout
DOM API
fetch
localStorage
console
location

the above will be accessed by js engine and given in code
we get it inside callstack like global object

when we want to execute the js code GEC will be pushed to callstack


when setTimeout comes it will register the callback in webapi's

we required callback queue to store the callback functions
and also event loop to again push the callback functions to callstack

after timer done the callback functions is pushed to callback queue

and then event loop will checks if there are any functions in callback queue and if callstack is empty then it will push the functions to callstack


debugger
setTimeout(()=>{
  console.log('setTimeout')
},3000)


function x(y){
  console.log('x')
  y()
}


x(function y(){
  console.log('y')
})

same applies for eventlisteners also
document.getElementById("btn").addEventListener("click", function y(){
  console.log('y')
})
add eventListner will be registered in dom api's environment

when user clicks the callback will be pushed to callback queue and then event loop will push to callstack

event loop will checks if callstack is empty or not both callbackqueue also

we need queue to execute these so callback queue is required


fetch method

fetch will be registered in web api's environment

when fetch is done the callback will be pushed to callback queue and then event loop will push to callstack

event loop will checks if callstack is empty or not both callbackqueue also

fetch("https://api.example.com/data").then(response => {
  console.log(response)
})


microtask queue is similar to callback queue but it has higher priority
comes first will ex

as we get promise earlier first cbf will be pushed to microtask queue and after the full code is executed the event loop will check that callstack is empty and microtask queue is not empty so it will execute the cbf from microtask queue

what can enter microtask queue
- promise
- mutation observer
- queueMicrotask
- process.nextTick (node.js)


what enter callback queue or task queue
- setTimeout
- setInterval
- setImmediate
- requestAnimationFrame
- addEventListener
- fetch
- XMLHttpRequest
- file system operations
- database operations
- network operations
- user interactions (click, keydown, etc.)
- timer functions
- storage operations
- location operations
- console operations
- global object operations
- DOM API operations
- fetch operations
- localStorage operations
- console operations
- location operations


as this will give chance to microtask queue to execute first
callback functions will be starved(starvation in callback queue)




Higher order function is a function that takes another function as an argument or returns a function
the function that is taken is nothing but a callback function

if we want to use like arr.map to existing function we can use Array.prototype function name