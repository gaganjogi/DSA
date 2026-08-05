block is nothing but compound statement

we group mutliple statements in block and group to so that i return only answer

if(true)// expects single statment
so that is the reason we use if(true){ /// to return single statement}. or else it gives unexpected end of input

block scope what are the variable and function how they behave in block

so let and const are block scoped but var is global scope we can see in seperate block scope

Shadowing

var a=4000//is shawdowed
{
    debugger
    let a1='abc'
        var a=3253
    const a2=100
    console.log(a)
    console.log(a1)
    console.log(a2)
}

console.log(a)

but not for let and const it will print based on the scope

but we cannot do shadow like this first define by let and then var this is wrong

let a=60
{
    var a=100.  /// will give already be declared
}

var a=90

let a=100
function sum(){
    var a=10.   // this is good
}

block scope also follows lexical scoping chain