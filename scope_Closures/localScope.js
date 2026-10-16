// A variable declared inside a function is accessible only within that function.

// Example -1
function test()
{
    let age =20;
    console.log(age); 
}
test(); //20

// Example -2
function test2()
{
    let age =30;
    console.log(age); //30
}
test2();

//Example - 3
function test3()
{
    let gender = "F";
    console.log(gender);
}
console.log(gender); // Error local scope variable we can't access by global scope- gender is not defined
