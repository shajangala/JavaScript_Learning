// Arrow function is shorter way of writing the function which is introduced in ES6.
//it uses => key instead of function keyword
//normal function
function add(a,b)
{
    return a+b;
}

const add2= function(a,b)
{
    return a+b;
};

// arrow function-explicit form
const add3= (a,b)=>{
    return a+b;
};

//arrow function-Implicit form here no braces and no return keyword if we return single statment if we prefer to use
const add4= (a,b)=> a+b;

const cube= (n)=>{n*n*n};
console.log(cube(2)); // undefined because no return keyword present.

const getUser= ()=>
{
    name: "JS"
}
console.log(getUser()); // undefined because inside{} is treated as the function body.
// name:"JS" is intrepreted as a labelled statement not the object being returned

const getUser2=()=>
({name:"JS"}); 
console.log(getUser2());//() makes the object an expression which is implicity arrow function return the object

// Arrow functions are perfect for short functions passed into other functions.
const browsers= ['Chrome','Firefox','IE','Safari'];
browsers.forEach((browser)=>{
    console.log(browser);
});

