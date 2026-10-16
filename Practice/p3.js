for (var i = 0; i < 10; i++) {
  var one = 1;
}
console.log(i);    // 10: var leaks out; the loop stopped when i became 10
console.log(one);  // 1

//Task: count how many times the letter “i” appears in "I am working in Mindfire solutions". Count both “I” and “i”.
let str= "I am working in Mindfire solutions"; // storing the sentense in the let variable
let count=0; // Declared count and assigned to 0
for(let i=0;i<str.length;i++) // for loop started with 0 index then it continues till length-1 
{
    if(str[i] === 'I' || str[i] === 'i') // Inside loop every character of given string checks with I and i  
    {
        count++; // if condition is satisfied count gets incremented.
    }
}
console.log(`The I or i occurances in the given string is ${count}times`) // finally occurances of I and i is printed.

const code = 500;
if (code === 200) 
    console.log("OK");
else if (code >= 400) 
    console.log("Client or server error");
else if (code >= 500) 
    console.log("Server error");
else 
    console.log("Other");
// o/p: Client or server error

switch (2) {
  case 1: console.log("one");
  case 2: console.log("two");
  case 3: console.log("three");
  default: console.log("default");
} // o/p: two three default with new line

switch ("1") {
  case 1: console.log("number"); break;
  default: console.log("no match");
} // no match

let n = 5;
while (n < 3) 
    { 
        console.log("while", n); 
        n++; 
    } // condition is failed no output
do { 
    console.log("do", n);
     n++;
     } while (n < 3);
     //do 5

  for (let i = 1; i <= 6; i++) 
    {
  if (i % 2 === 0)  
    continue;
  if (i === 5) 
    break;
  console.log(i);
    }
    /* i equal to 0 i===5 print    
       1  no        no     1
       2  yes      skip   skip
       3  no       no     3
       4  yes     skip    skip
       5  no      yes exit  exit


    */

const arr = ["a", "b"];
for (const x in arr) 
    console.log(x, typeof x); //0 string
for (const x of arr) 
    console.log(x); //a b

for (var k = 0; k < 3; k++) {}
console.log(k); //3

// Grade: for score = 78, use if/else if to print A (≥90), B (≥75), C (≥50) or F.

let score=78;
if(score >= 90)
{
    console.log("Print A");

}
else if(score >=75)
{
    console.log("Print B");
}
else if(score >= 75)
{
    console.log("Print C");
}
else{
    console.log("Print F");
}

//Browser launcher: switch on browser. 
//Print a launch message for "chrome" / "firefox" / "edge", "Unknown browser" by default, and make "chromium" and "chrome" share the same message (fall-through).

let browser = "chromium";
switch(browser)
{
    case "chrome"  : 
    case "chromium" :console.log("Chrome");
                     break;
    case "firefox"  : console.log("firefox");
                     break;
    case "edge"     : console.log("edge");
                     break;
    default         : console.log("Unknown browser");
                     break;
}

// Retry: with while, simulate retries. let attempt = 0, and loop until attempt === 3, printing "Retry 1", "Retry 2", "Retry 3".
let attempt = 0;
let i1=1;
while(true)
{
    console.log(`Retry ${i1}`);
    i1++
    attempt++;
    if(attempt === 3)
         break;
}

// First failure: const results = ["PASS", "PASS", "FAIL", "PASS", "FAIL"]. 
// Loop and print the index of the first “FAIL”, then stop (use break).
const results = ["PASS", "PASS", "FAIL", "PASS", "FAIL"];
for(const x in results)
{
    if(results[x] === "FAIL")
    {
        console.log(`Index of ${x}`);
        break;
    }
}

//Skip SKIPPED: const statuses = ["PASS", "SKIPPED", "FAIL", "SKIPPED", "PASS"]. 
// Print every status except “SKIPPED” (use continue).
const statuses = ["PASS", "SKIPPED", "FAIL", "SKIPPED", "PASS"];
for(const y of statuses)
{
    if(y === "SKIPPED")
    {
        continue;
    }
    console.log(y);
}



// I will store the string in a variable "I am working in Mindfire solutions"
// I will iterate the string using loop of for of/for
// if the character of every letter in the string checks with i and I then count if the letter is matches with i and I
// finally it prints i and I.

let strn = "I am working in Mindfire solutions"; // declare and stored the given string
let count1=0; // declared count and initialises to 0
for(const v of strn) // iterates the loop with every character of given string using for..of
{
    if(v === 'i' || v === 'I') // checks the every character in the string with i and I
        count1++; // if the character is i or I count will incremented
}
console.log(`The repetition of small or captial I in the given string is ${count1}`); // finally prints the iteration of i


