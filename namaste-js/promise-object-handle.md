map filter and reduce

map is used to transform an array
filter is used to filter an array
reduce is used to reduce an array (like to find out max or sum)

What are promises?

Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.

let cart=['shoes','pants'];

let promise=createOrder(cart) is an async operation // will return an promise

like it may be empty object or anything {data: orderid}

at first it will return an empty object and when async operation is completed promise object will be filled with details

and next we attach a callback function for handling the result

promise.then(function(orderId) {
    console.log(orderId);
});

no earlier in callback hell we were giving callback function to higher order function and we will leave that we did not know if high order functions fail or not 

but now we are attaching the callback function to promise object

promises give us that trust and call it once

promise have states
pending, fulfilled, rejected

first it is pending and then fulfilled
when console.log is executed the promise will be in pending state so at start it will be pending..


we get promise we need to resolve them using . then
fetch will return promise and next we can just use them using .then

promise object as a placeholder for a certain period untill the async operation is completed (container for a future value)

is a eventual completion of async chronous operation

instead of callback hell 

we can just chain using .then

createOrder(cart).then(function(orderId){
    return makePayment(orderId);
}).then(function(paymentInfo){
    return orderSummary(paymentInfo);
});

here linear chain and we are piping the data we need to return keep in mind
