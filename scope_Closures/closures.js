//Example 1

function counter()
{
    let count = 0; 
    console.log(count);
    return function()
    {
        count++;
        console.log(count);
    }
}
counter();
counter();
counter();
console.log("***")
const increment = counter(); // initialises the count as 0 and returns the function()
increment(); //1
increment(); //2
increment(); //3

//Example 2

function greet(Name)
{
    return function()
    {
        console.log("Hello" + Name);
    }
}
const greetJava = greet("Java");
const greetScript = greet("Script");
greetJava(); // Hello Java
greetScript(); // Hello Script
console.log("***");
greet("Shamili")();
console.log(greet("Shamili")); //representation 
greet("Shamili"); // no output
greet(); // error no argument is passed

// Example 3
function test()
{
    let msg = "Hai";
    setTimeout(function(){
        console.log(msg);
    },3000);
}
test();

// Example 4
for(var i=0;i<3; i++)
{
    setTimeout(function()
{
    console.log(i);
},2000);
}

for(let i=0;i<3; i++)
{
    setTimeout(function()
{
    console.log(i);
},2000);
}