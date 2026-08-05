function declaration and function statement are all same


function a(){
    console.log('a is called')
}


function expression

var b=function(){
    console.log('b is called')
}

main difference between above two is hoisting 

as b will give error for this 

anonmyous function

we need to declare using variable
we use this when we need to return the values

named function we use name for a function and put it to expression

var c=function name(){
    console.log('c is called')
}


paramters and arguments

when defining a function we use parameters
function d(param1,param2){
    console.log(param1,param2)
}

when calling a function we use arguments
d(arg1,arg2)

first class function

we can pass function as an argument to another function
we can return function from another function

treated as value or passed as argument in another function or return from another function

and also called first class citizen

arrow function

const arrowFunction = () => {
    console.log('arrow function')
}
