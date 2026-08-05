Two problems with callback hell:

1. Callback hell
2. Inversion of control

for like if we want to do any async operation and we want to do another async operation after that we can use callback hell

like e-commerce website where we want to do multiple operations like get user data, get order data, get payment data, etc.

first will create order

let cart=['shoes','pants'];

api.createOrder(cart,function(){
    api.processPayment(function(){
        api.showOrderSummary(function(){
            api.updateWalletBalance(function(){
                //callback hell
            });
        });
    });
});

the above is called callback hell

or code grow horizontally
and tough to maintain
pyramid of doom


inversion of control that is the reason we use 

loss the control of the code
we are bindly trusting the callback function

this is risky

there may be bugs in the callback function and what if the callback function is not called

when we write our function and give that to some other we cannot directly believe them right

asynschronous code exist due to callbacks function 