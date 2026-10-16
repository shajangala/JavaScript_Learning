// Global scope is nothing which is declared outside the function or block.
// It can be accessed from anywhere in the program, including inside functions and blocks.

// Example - 1
let name1 ="Java";
function greetName(){
    console.log(`Hello ${name1}`);
}
greetName(); // Hello Java

//Example - 2
let x=10;
console.log(x); //10

function testX()
{
    console.log(x);
}
testX(); //10