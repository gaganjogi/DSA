CREATING PROMISES

let cart=['shoes','pants'];

to creating we need to use promise constructor we get resolve and reject this is what js has given us 
function createOrder(cart){

    const pr=new Promise((resolve, reject)=>{
        //validate cart
        const valid=false
        if(valid){
            const error=new Error('cart is not valid');
            reject(error);
        }
        const orderId=123;
        resolve(orderId);

    })
    return pr;
}

the error we have created is not handled yet

so we use catch block to handle the error

let promise= createOrder(cart)
promise.then((orderId)=>return orderId)
.then((orderId)=>return paymentInfo(orderId))
.then((paymentInfo)=>console.log(paymentInfo))
.catch((error)=>{
throw error
})

catch will check only top of it's then
error in any one it will be flagged to catch block only

disadvantages of this 

promises are not easy to read 
promises hell