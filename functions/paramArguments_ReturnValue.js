// The named placeholders which we pass inside function is known as parameters.
// The actual values we passed while calling the function is known as arguements.

function add(a,b)
{
    let result;
    result= a+b;
    console.log(result);
    return result;
}
add(3,10);
console.log(add(4,4));
add(1); //b is undefined so 1+undefined =NaN
add(1,2,3);
