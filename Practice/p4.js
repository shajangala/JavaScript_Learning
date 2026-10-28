function greet(name="Guest")
{
    return `Hi ${name}`;
}
console.log(greet()); // Hi Guest
console.log(greet("Sam")); //Hi Sam

function logOnly()
{
    console.log("inside");
}
console.log(logOnly()); // inside undefined

function check() {
  return "first";
  return "second";
}
console.log(check()); //first

function add(a, b) { 
    return a + b; 
}
console.log(add(2)); // 2+undefined =NaN
console.log(add(1, 2, 3)); // 3

const square = n => n * n;
const cube = n => { n * n * n; };
console.log(square(4), cube(2)); // 16 undefined

start();
function start() { 
    console.log("started"); 
} // started

(function () {
  console.log("IIFE ran");
})(); //IIFE ran

// finish();
// const finish = () => console.log("finished"); //error can't access finish

//Write isPassed(status) as a normal function, then convert it to an arrow function with an implicit return.
//  It returns true if the status is "Passed".
/*
function isPassed(status)
{
     if(status === "Passed")
        return true
     else
        return false
}
     */
const isPassed = (status)=> status === "Passed";
console.log(isPassed("Passed"));
console.log(isPassed("Failed"));

// Write calculateTotal(price, quantity = 1) that returns the total.
//  Call it with (100, 3) and (250), and print both.

function calculateTotal(price,quantity=1)
{
    return price + quantity;
}
console.log(calculateTotal(100,3)); //103
console.log(calculateTotal(250)); //251

/*
const calculateTotal = (price,quantity=1) => price + quantity;
console.log(calculateTotal(100,3)); //103
console.log(calculateTotal(250)); //251
*/

// Write getGrade(score) that returns “A”/”B”/”C”/”F” (use your Day 3 logic). 
// Call it for 3 scores and print Score 78 → B.

const getGrade= (score) =>
{
       if(score >= 90)
        return `Score ${score} -> A` ;
    else if(score >= 75)
        return `Score ${score} -> B` ;
    else if(score >= 45)
        return `Score ${score} -> C` ;
    else
        return `Score ${score} -> F` ;
};
console.log(getGrade(78));
console.log(getGrade(91));
console.log(getGrade(45));
console.log(getGrade(38));

// Use forEach with an arrow function to print Testing on Chrome, etc., 
// for ["Chrome", "Firefox", "Edge"].

let arr = ["Chrome", "Firefox", "Edge"];
arr.forEach((element)=>
{
     console.log(`Testing on ${element}`);
});

//Write an IIFE that prints "Test setup complete".
(function printMessage()
{
    console.log("Test setup complete");
})();

(()=>
{
    console.log("Test setup complete");
})();