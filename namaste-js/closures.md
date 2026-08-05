closures is not but same as lexical scope and 

closures means a function bind together with its lexical environment

we can pass the function to variable

we can pass the function as the parameter

instead of calling we can return the function like this 

function a(){
    let a =10
    function y(){
        console.log(a)
    }
    return y
}

let closure = a()
closure()


only function was not returned but also the lexical environment was returned 

with closures think like this 

for interview function along with lexical scope will be returned

balance is completely inaccessible from outside — only the returned methods can touch it. 

Corner Cases for interview:-

if i try to change value it will give most recent value like as it is reference

variable will not store

closure function along with scope

used module design pattern
functions like once
memoise
function memoizedSquare() {
  const cache = {}
  return function(n) {
    if (n in cache) {
      console.log('from cache')
      return cache[n]
    }
    console.log('calculating')
    cache[n] = n * n
    return cache[n]
  }
}

const square = memoizedSquare()
console.log(square(5)) // calculating → 25
console.log(square(5)) // from cache → 25


let will create new scope everytime 
function x(){
    var x=1
    for(var i=0;i<=5;i++){
  setTimeout(()=>{
        console.log(i)
    },i*1000)
    }
  console.log('hello')
}

x()
as it is block scope


as here everytime i call the close(i) so new copy of i will be there

debugger
function x(){
    var x=1
    for(var i=0;i<=5;i++){
      function close(i){
setTimeout(()=>{
        console.log(i)
    },i*1000)
    }
    close(i)
      }

  console.log('hello')
}

x()

function counter(){
  var count=0
    this.incrementCounter=function increment(){
    count++
    console.log(count)
  }
  this.decrementCounter=function decrement(){
    count--
    console.log(count)
  }
  }


let counter1= new counter()
counter1.incrementCounter()
counter1.decrementCounter()

disadvantages:-
memory consumption
memory leak
freeze browser

garbage collector

as in C++ we as a developer will try to manage memory
but high level language like js the js engine the unused memory will be removed or moved to garbage

see like as we are described earlier var a=0
smartly collects garbage

var x=0,y=10.   // here only y is smartly garbage collected
return function abc(){
    console.log(x)
}
