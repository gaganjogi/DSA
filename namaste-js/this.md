this value depends on the strict mode 

this in strict mode (this substitution)

if the value of this keyword is not defined it will be undefined in strict mode

then in non strict mode if the value of this keyword is not defined it will be global object


this depends of how that is called

const obj={
    name:"Gagan",
    greet(){
        console.log(this.name);
    }
}

obj.greet(); // Gagan

// this depends on how that is called
// this is not depends on where it is defined
// this is depends on how that is called