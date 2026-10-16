// Hoisting is JS behavior where declarions are processed before the code is executed.
// It means JS knows about the certain variables and functions before it reaches the of code where they are declared.
//Hoisting is JS behavior of processing declarations before executing the code, which can make some variables and functions available before their written position.
// Hositing deals with only declarations not Initializations.

// Ex: Var variable - Hoisted

console.log(a);    // undefined
var a=1;

// Ex: function declaration - Hoisted
sayGreeting();
function sayGreeting()
{
    console.log("Good Morning!");
}

/*
// Ex: let variable - Not Hoisted
console.log(b); //Reference Error : cannot access b
let b=2;

// Ex: const variable - Not Hoisted
console.log(c); //Reference Error : cannot access c
const c=3;

// let and const variables are can't be accessed before they are declared/initialazation because they are Temporal Dead Zone(TDZ).

// function expression - Not Hoisted
// function expression with var  - Not Hoisted

sayHello(); // sayHello is not a function
var sayHello = function()
{
    console.log("Hello!");
}


// function expression with let - Not Hoisted
sayGreet();   // cannot access 'sayGreet before initialization
let sayGreet = function()
{
    console.log("Greet!");
}


// function expression with const - Not Hoisted
sayNoon(); // cannot access 'sayGreet before initialization
const sayNoon = function()
{
    console.log("Good Noon!");
}

// Arrow function expression -Not hoisted
sayEvening(); //sayEvening is not a function
var sayEvening = ()=> {
    console.log("Good Evening!");
};
*/