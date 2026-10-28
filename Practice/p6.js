/*
function isAdult(age) {
  return age >= 18;
}

function getFullName(first, last) {
  return `${first} ${last}`;
}

function getTestData() {
  return { username: "shamili", browser: "chrome" };   // careful: returns an object!
}
  */

const isAdult = (age)=> age>=18;
const getFullName =  (first,last)=> ` ${first} ${last} `;
const getTestData = ()=> ({username:"shamili",browser:"chrome"});

const a = (x) => x * 2;
const b = (x) => { x * 2; };
const c = () => ({ status: "PASS" });
console.log(a(5), b(5), c()); // 10 // implicit arrow function without return keyword so it will return x*2 5*2 =10
// undefined  {} is present after => so it will treat as function no return keyword is mentioned so it will return as undefined
// {status: "PASS"} implicit form of arrow function and object is mentioned () so it returns the object so prints {status: PASS}

// Write an arrow function checkStatus(code) that returns "PASS" if code === 200, 
// otherwise "FAIL" (use a ternary, in one line). 
// Then use it inside a forEach over [200, 404, 200, 500] to print 200 → PASS and so on.
const checkStatus = (code) => (code === 200)?"PASS":"FAIL"; // arrow function declared with name checkStatus and return is defined as ternary operator 
const arr=[200,404,200,500]; // arr is declared with given values
arr.forEach((x)=>{ // iterating the arr values using forEach array method
    console.log(x,"->",checkStatus(x)); // printing the value and return value of checkStatus function
});

/* Coding task 1: the swap drill 🧩

let a = 10; let b = 20; Swap them so a = 20 and b = 10.

Do it two ways:

With a third variable (temp)
Without a third variable (hint: + and -)

For each way: write the plan as comments first, then the code, then print a = 20, b = 10.

Then explain way 1 in 2 sentences, as if to a reviewer. */

console.log("Swapping with third variable");
let aa=10,bb=20;
let cc;  // swapping variable using the third variable
cc = aa; //kept aa value into third variable
aa = bb; //kept bb value into aa now
bb = cc; // now kept aa value into bb now which we stored in cc third variable
console.log(`After swap of aa and bb are ${aa},${bb}`);

console.log("Swapping without third variable");
let a1=10,b1=20;
a1 = a1+b1; // sum of both numbers are stored in a1
b1 = a1-b1; // In the total sum we are subtracting the b1 then a1 value stored in b1 now
a1 = a1-b1; // still a1 holds total sum in that sum we removing swapped b1 value so a1 will get original b1 value;
console.log(`After swap of a1 and b1 are ${a1},${b1}`);