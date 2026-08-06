Async/Await

async function will always returns a promise or if we try to return a value it will be wrapped in a promise

async function myFunction() {
    return "Hello";
}

myFunction().then(console.log); // "Hello"

async and await combo is used to handle promises in a more readable way

await should only be used inside async function

when js engine sees await it pauses the execution of the function and waits for the promise to be resolved
and take remove the function from callstack

fetch return response object that i need to convert it into json that will also return promise

inside async function for error handling we can use try catch method

try{
    
}catch(error){
    
}

for interview to say what is async await
async keyword makes a function return a promise
await keyword makes a function wait for a promise