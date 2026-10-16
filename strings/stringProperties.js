//Property - A Property gives you information about the string.
// Finding length of a string
let str1 = "Hello World!";
console.log(str1.length);

//Methods - Thsese are functions that can perform an operation on a string.
let str2 = "Java Script";
console.log(str2.toUpperCase());      // converts the given string to UpperCase
console.log(str2.toLowerCase());      // converts the given string to LowerCase
console.log(str2.charAt(2));          // gives character at given Index
console.log(str2.at(2));              // gives character at given Index
console.log(str2.indexOf("a"));       // gives index of first occurance of a given character
console.log(str2.lastIndexOf("a"));   // gives index of last occurance of a given character
console.log(str2.includes("Scr"));    // It checks the given value is present in the string or not, when the condition is met it returns true.
console.log(str2.includes("scr"));
console.log(str2.includes("str"));
console.log(str2.startsWith("J"));    // It checks the given value is present at start of the string or not
console.log(str2.startsWith("j"));
console.log(str2.startsWith("s"));
console.log(str2.endsWith("t"));      // It checks the given value is present at end of the string or not
console.log(str2.endsWith("T") && str2.endsWith("s"));
console.log(str2.slice(1,5));          // gives sub string of the given string slice/substring(start,end)--> end = end-1
console.log(str2.substring(1,5));
console.log(str2.replace("a","s"));    // replaces the first occurance of the given character.
console.log(str2.replace("s","a"));
console.log(str2.replaceAll("a","s")); // replaces all the occurance of the given character.

let str3 = " Space ";
console.log(str3.length);
console.log(str3.trim());              // removes the spaces from both ends
console.log(str3.trim().length);
let str4 = " Space ";
console.log(str4.length);
console.log(str4.trimStart());        // removes the spaces at the start
console.log(str4.trimStart().length);
let str5 = " Space "
console.log(str5.length);
console.log(str5.trimEnd());          // removes the spaces at the end
console.log(str5.trimEnd().length);

let str6 = "Hello Java Script";
console.log(str6.split(" "));        // splits the string into array with space

let str7 = "Hello";
console.log(str7.concat(" string"));  // joins both strings
console.log(str7.repeat(4));          // repeats the string 4 times
console.log(str7.charCodeAt(3));      // gives the Unicode value of a character at a given index