// Function is a re-usable block of code that perform a paticular task. 

// method-1
function add()
{
    let a=2,b=3;
    let c= a+b;
    console.log(`Addition of given numbers is ${c}.`);

}
add();

//method 2 
const fun = function sub()
{
    let a=10,b=7;
    let c=a-b;
    console.log(`Subtraction of given numbers is ${c}`);
    return c;
}
fun();
console.log(fun);
console.log(fun());

//method 3 arrow function
const div = ()=>{
let a=10,b=2;
let d= a/b;
console.log(`Division of given numbers is ${d}.`);
};
div();
console.log(div);
console.log(div()); // executes the function and valus is undefined because function didn't return any value.

