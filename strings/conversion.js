// conversion - converting another data type into String
let num1 = 100;
let str = String(num1);
console.log(num1);
console.log(typeof num1);
console.log(str);
console.log(typeof str);

let strn = num1.toString();
console.log(strn);
console.log(typeof strn);

let strn1 = "100";
let num2 = Number(strn1);
console.log(num2);
console.log(typeof num2);
let num3 = parseInt(strn1);
console.log(num3);
console.log(typeof num3);

// split - It is very common method used to convert strings to array
let nstr = "Hello";
console.log(nstr.split(""));
let nstr1 = "apple,banana,orange";
console.log(nstr1.split(","));
let nstr2 = "Hello JS";
console.log(nstr2.split(" "));

// + - usually performs a concatenation
// -,/,* - try to convert strings to numbers then perform mathematical operations

console.log("20"+"10");
console.log("20"-10);
console.log("20"*10);
console.log("20"/10);

let age = "25";
console.log(age+5);
console.log(Number(age)+5);
console.log("JS"+5);
console.log("Java"+"Script");
console.log(2+5);
