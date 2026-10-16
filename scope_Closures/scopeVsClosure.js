// scope is where we can access the variable
// closure is how the inner function accessing the variables from its outer scope even after the outer function is finished.

// Scope -Example
 function x()
 {
    let a = 10;
    console.log(a);
 }
 x();

 // Closure - Example
 function greet()
 {
    let x=20;
    return function()
    {
      console.log(x);
    }
 }
 const value = greet();
 value();