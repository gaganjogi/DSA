PROMISE API'S

promise.all
we use this api to run multiple promises in parallel
for example 

it will take array of promises and give back a [values] array
promise.all([promise1, promise2, promise3]) for example 3s,1s,2s
it will take 3s to complete all the promises it will wait for all of them

in rejection case 
if any one of the promise is rejected then whole promise.all will be rejected immediately
even if other two have been fulfilled or rejected

to overcome the above one we use 

promise.allSettled

promise.allSettled([promise1, promise2, promise3])
 in this if promise2 is rejected it will wait for all promised to settled wheather it is success or failure but time it will take total time of max time taken by any promise
 like [val1,rejected,val2]



promise.race

promise.race([promise1, promise2, promise3])
 in this if promise2 is resolved first then it will return the value of promise2 and reject the other promises
 like [val2]

 Promise.race = "give me the outcome (success or failure) of whichever promise settles first — I don't care if it's a resolve or a reject, just be first." The losers aren't cancelled or rejected; they're just ignored.


 promise.any

 promise.any([promise1, promise2, promise3])
 in this if promise2 is resolved first then it will return the value of promise2 and reject the other promises
 like [val2]

Promise.any → first to resolve wins; rejections are ignored unless every promise rejects, in which case you get an AggregateError with all the reasons



const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 resolved")
    },1000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 resolved")
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p3 resolved")
    },3000)
})

const result=Promise.all([p1,p2,p3])
console.log(result)
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error')
    },1000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error')
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error')
    },3000)
})


let ans=Promise.any([p1,p2,p3])
ans.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

settled means two things 
1. resolved
2. rejected

to get aggregated errors
 err.errors.map((item)=>console.log(item))