let str1 = "Hello";
let str2 = "Hello";
console.log(str1 === str2);    // strict comparison includes data types too

let fruits = ["apple","banana","orange","grapes"];
console.log(fruits);
console.log(fruits.sort((a,b) => a.localeCompare(b)));  // It is used only for comparing the strings both strings equal gives 0
                                                       // gives negative number, a comes before b
                                                       // gives positive number, a comes after b                                                

// replace - It doesn't modify the original string
let str3 = "Hello World";
str3.replace("World","JavaScript");
console.log(str3);
let str4 = str3.replace("World","JavaScript");
console.log(str4);

let str5 = "Hello Hello Hello";
console.log(str5.replace("Hello","Hi"));
console.log(str5.replaceAll("Hello","Hi"));

// concat - Joins both strings
let str6 = "Hello";
let str7 = "World";
console.log(str6 +" "+str7);
console.log(str6.concat(" ",str7));

// template literals - It is the modern JS easiet way to combine variables with strings
let str8 = "JS";
let num = 2026;
let result = `I am learning ${str8} in ${num}`;
console.log(result);

let str9 = "New";
let str10 = "new";
console.log(str9 === str10);
console.log(str9.toLowerCase() === str10.toLowerCase());

//localcompare



