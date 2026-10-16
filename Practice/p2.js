console.log("10" + 5, "10" - 5, "10" * "2"); //105,5,20
console.log("200" == 200, "200" === 200); // true false
console.log(null == undefined, null === undefined); // true false
console.log("10" < "9", 10 < 9); //true false   
console.log("" || "default", 0 || 5, 0 ?? 5); //"default" 5 0
console.log(true && "yes", false && "yes"); // yes false


let n = 3;
console.log(n++, n, ++n); //3 4 5


try {
  console.log("A");
  null.length;
  console.log("B");
} catch (e) {
  console.log("C", e.name);
} finally {
  console.log("D");
}
console.log("E"); //A C type error D E


//Status checker: const expected = 200; const actual = "200";. 
// Print the result of both == and ===. Then write an if with === that prints "PASS" or "FAIL". Which one does it print, and why?
//  Fix it with Number(actual).

const expected = 200;
const actual = "200";
console.log(expected == actual , expected === actual); //true false
if(expected === actual)
{
    console.log("Pass");
}
else{
    console.log("Fail");
} // fail because expected === actual returns false so else block will execute

if(expected === Number(actual))
{
    console.log("Pass");
}
else{
    console.log("Fail");
} // Pass because actual is now convert value into number for comparison so if block will execute both are same data type it will return true


// Even or odd: using % and a ternary, print "4 is even" / "7 is odd" for the numbers 4 and 7.
let num = 4;
let numberCheck = (num%2 === 0)?"Even":"Odd";
console.log(`${num} is ${numberCheck}`);
num = 7;
numberCheck = (num%2 === 0)?"Even":"Odd";
console.log(`${num} is ${numberCheck}`);

//Login rule: const username = "shamili"; const password = "";. 
// Using &&, print "Login enabled" only if both are filled, otherwise "Login disabled".

const username = "shamili";
const password = "";
if(username && password )
{
console.log("Login enabled");
}
else{
    console.log("Login disabled");
}

//Validator with throw: write function validateAge(age) that throws new Error("Age must be a number")
//  if Number.isNaN(Number(age)), and otherwise prints "Valid age: …". 
// Call it inside try...catch with "25", then with "abc", and print error.message in the catch. 
// Add a finally that prints "Validation finished".

function validateAge(age)
    {
       if(Number.isNaN(Number(age)))
       {
             throw new Error("Age must be a number");
       }
       else{
        console.log("Valid age");
       }
    }

try{
     validateAge(25);
     validateAge("abc");
}
catch(error)
{
    console.log(error.message);
}
finally{
    console.log("validation finished");
}


/* Write a function validateStatus(code) that:

Converts code to a number using Number().
Throws new Error(...) with a helpful message if the result is NaN, e.g. Invalid status code: abc.
Otherwise uses a ternary to return "PASS" if the number === 200, or "FAIL" if not.

Then call it inside try...catch...finally with these 3 values, one at a time:

"200", 404, "abc"

For each call, print the result, or the error message in catch, and print "Check complete" in finally.

Hint: you’ll need a separate try...catch...finally for each value. Or, for a bonus, put the 3 values in an array and use a loop with the try/catch inside.
*/
function validateStatus(code)
{
    if(Number.isNaN(Number(code)))
    {
        throw new Error(`Invalid status code: ${code}`);
    }
    else{
        const msg= (Number(code) === 200)? "PASS":"FAIL";
        return msg;
    }
}
try{
    let message1;
     message1=validateStatus("200");
     console.log("first call",message1);
     message1=validateStatus(404);
     console.log("second call",message1);
     message1 =validateStatus("abc");
     console.log("third call",message1);
}
catch(error)
{
    console.log(error.message);
}
finally{
    console.log("Check complete");
}