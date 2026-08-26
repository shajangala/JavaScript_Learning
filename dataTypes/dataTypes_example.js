// String is primitive data type in JS
// It can declared using single quotes, double quotes and backticks.

let str= "Hello";
console.log(str);
str = 'world';
console.log(str);
name = `Hello ${str}`;
console.log(name);
console.log(typeof name);

// Number is primitive data type in JS
// It can be declared using numbers.

let num =10;
console.log(num);
console.log(typeof num);

//Boolean is primitive data type in JS

let bool= true;
console.log(bool);
console.log(typeof bool);

// Null is primitive data type in JS

let n= null;
console.log(n);
console.log(typeof n);

// Undefined is primitive data type in JS

let x;
console.log(x);
console.log(typeof x);

//BigInt is primitive data type in JS

let y= 1234645678678n;
console.log(y);
console.log(typeof y);

//date is not a primitive data type in JS. 
const today = new Date();
console.log(today);
console.log(typeof today);
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log("*******");
const today1 =new Date(2026, 11, 10);
console.log(today1.toDateString()); // I have to convert to IST
