// The area of your code where a variable can be accessed is called its scope.

let name1 = "James";
console.log(name1);

function test()
{
    let gender = "Male";
    console.log(gender);
}

/*
// gender is not accessible outside the function test() because it is declared inside the function, called as local scope.
console.log(gender);  // Ref error: gender is not defined
*/
