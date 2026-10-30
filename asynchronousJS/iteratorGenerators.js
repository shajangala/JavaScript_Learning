// Normal array
const tests =["Login","Search","Cart"];
for(const value of tests)
{
    console.log(value);
}
// Login
// Search 
// Cart
// Normally it will all the values in the loop.
// If we want one item at a time, whenever we need it iterator comes into picture


//Iterator
// An Iterator gives you next item when you call .next()
const it=tests[Symbol.iterator]();
// it.next gives {value,done} done-false means array having next item if it is true end of the array.
console.log(it.next()); // {value:"Login",done:false}
console.log(it.next());//  {value:"Search",done:false}
console.log(it.next()); // {value:"Cart",done: false}
console.log(it.next()); // {value:undefined, done: true}


//Generator:
//A generator is a special type of function that can pause its execution and continue later from where it stopped.
// Normally  a function runs from start to finish but a generator works differently it can pause at yield and resume when you call .next()

function* steps()
{
    console.log("Start");
    yield "Open";
    yield "Login";
}
const s= steps();  // it creates generator object stores it in s but the execution is not started yet
console.log(s.next()); // {value:"Open", done:false} now it starts execution 
console.log(s.next()); // {value:"Login", done : false}
console.log(s.next()); //{value: undefined,done: true}

// dummy data creation using generator