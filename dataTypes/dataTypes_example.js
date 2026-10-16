// String is primitive data type in JS
// It can declared using single quotes, double quotes and backticks.

let str= "Hello";
console.log(str);
str = 'world';
console.log(str);
name1 = `Hello ${str}`;
console.log(name1);
console.log(typeof name1);

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

console.log("**** DataTypes ****");

console.log(typeof "hi"); //string
console.log(typeof 23); //number
console.log(typeof true); //boolean
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number
console.log(typeof {}); //Object
console.log(typeof []); //Object
console.log(typeof 20n); //BigInt
console.log(typeof function(){});  // function
console.log(typeof new Date());//object
console.log("**** Datatype ****");

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
